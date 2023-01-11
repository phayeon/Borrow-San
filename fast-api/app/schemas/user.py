from datetime import datetime
from typing import List
from uuid import UUID
from pydantic import BaseModel
from app.schemas.article import Article
from app.schemas.rent import Rent


class User(BaseModel):
    user_id: UUID
    age: str
    address: str
    most_use_loc: str
    cur_lat: str
    cur_lng: str
    birth: str
    grade: str
    pay_info: str
    password: str
    email: str
    gender: str
    token: str
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True

class UserDetail(User):
    articles: List[Article] = []
    rents: List[Rent] = []