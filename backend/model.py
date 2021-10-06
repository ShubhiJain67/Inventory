from pydantic import BaseModel
from typing import Optional

class Item(BaseModel):
    id: int
    name: str
    description: str
    price: float
    on_offer: bool

    class Config:
        orm_mode = True