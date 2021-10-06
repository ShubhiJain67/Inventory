from database import Base, engine
from db_model import Item

print("Creating Database ...")

Base.metadata.create_all(engine)