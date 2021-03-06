from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy import create_engine

engine = create_engine(
    "postgresql://postgres:Welcome%402021@localhost/ItemList", 
    echo = True
)

Base = declarative_base()

SessionLocal = sessionmaker(bind = engine)