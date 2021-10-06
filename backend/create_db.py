from database import Base, engine
from model_db import Item

print("Creating Database ...")

Base.metadata.create_all(engine)