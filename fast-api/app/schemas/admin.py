from typing import List
from uuid import UUID

from pydantic import BaseModel

from app.schemas.article import Article
from app.schemas.rent import Rent
from app.schemas.stand import Stand
from app.schemas.umbrella import Umbrella
from app.schemas.user import User


class Admin(BaseModel):
    admin_id: UUID
    name: str

    class Config:
        orm_mode = True


class AdminDetail(Admin):
    stands: List[Stand] = []
    umbrellas: List[Umbrella] = []
    articles: List[Article] = []
    users: List[User] = []
    rents: List[Rent] = []