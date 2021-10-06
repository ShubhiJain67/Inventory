from database import Base
from sqlalchemy import String, Integer, Boolean, Float, Column, Text

class Item(Base):
    __tablename__ = 'items'
    id = Column(Integer, primary_key=True)
    name = Column(String(255), nullable=False, unique=True)
    description = Column(Text)
    price= Column(Float, nullable=False)
    count= Column(Integer, default=0, nullable=False)
    imageLink = Column(Text, default="https://www.pdma.org/global_graphics/default-store-350x350.jpg")

    def __repr__(self):
        return f"Item NAme : {self.name} Price = {self.price} Description = {self.description} Offer = {self.on_offer}"