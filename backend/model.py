from pydantic import BaseModel
from typing import Optional

class Item(BaseModel):
    id: int
    name: str
    description: str
    price: float
    count: int
    imageLink: str

    class Config:
        orm_mode = True