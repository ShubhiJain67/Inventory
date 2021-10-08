from os import stat
from fastapi import FastAPI, status, HTTPException
from model import Item
from typing import List, Optional
from database import SessionLocal
from db_model import Item as DB_Item
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

db = SessionLocal()

@app.get('/')
def index():
    return {"msg" : "Welcome to my app!"}

@app.get('/greet')
def greet_by_name(name: Optional[str] = 'User'):
    return {"msg" : f"Welcome {name}"}

# -------------------- Item Actions -----------------

# -------------------- Get All Items -----------------
@app.get('/items', response_model= List[Item], status_code=status.HTTP_200_OK)
def get_all_items():
    items = db.query(DB_Item).all()
    return items

# -------------------- Get Item By ID -----------------
@app.get('/items/{item_id}', response_model=Item, status_code=status.HTTP_200_OK)
def get_item_by_id(item_id: int):
    # item = db.query(DB_Item).filter(DB_Item.id == item_id or DB_Item.name.contains(item_id)).first()
    item = db.query(DB_Item).filter(DB_Item.id == item_id).first()
    if item: 
        return item
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"No Item with the given ID : {item_id} exists!")

# -------------------- Add New Item -----------------
@app.post('/items', response_model=Item, status_code=status.HTTP_201_CREATED)
def add_new_item(item: Item):
    # Handling Exceptions for Uniqueness of name and ID
    db_item = db.query(DB_Item).filter(DB_Item.name == item.name).first()
    if db_item:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"Item with the same Name Already Exists!")
    db_item = db.query(DB_Item).filter(DB_Item.id == item.id).first()
    if db_item:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"Item with the same ID Already Exists!")
    

    new_item = DB_Item(
        id = item.id,
        name = item.name,
        price = item.price,
        description = item.description,
        count = item.count,
        imageLink = item.imageLink
    )
    db.add(new_item)
    db.commit()

    return new_item

# -------------------- Update Item By ID -----------------
@app.put('/items/{item_id}', response_model= Item, status_code=status.HTTP_200_OK)
def update_item_by_id(item_id: int, item: Item):
    target_item = db.query(DB_Item).filter(DB_Item.id == item_id).first()
    target_item.id = item.id
    target_item.name = item.name
    target_item.description = item.description
    target_item.price = item.price
    target_item.count = item.count,
    target_item.imageLink = item.imageLink

    db.commit()

    return target_item

# -------------------- Delete Item By ID -----------------
@app.delete('/items/{item_id}')
def delete_item_by_id(item_id: int):
    target_item = db.query(DB_Item).filter(DB_Item.id == item_id).first()
    if target_item:
        db.delete(target_item)
        db.commit()
        return {"detail" : f"Item with ID : {item_id} Deleted Successfully!"}
    else:
        raise HTTPException(status_code= status.HTTP_404_NOT_FOUND, detail=f"Item with ID : {item_id} not Found in the database")

