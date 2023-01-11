from uuid import uuid4

from sqlalchemy import Column, String
from sqlalchemy.orm import relationship
from sqlalchemy_utils import UUIDType

from ..database import Base


class Admin(Base):

    __tablename__ = "admins"

    admin_id = Column(UUIDType(binary=False), primary_key=True, default=uuid4)
    name = Column(String(20), unique=True, nullable=False)

    stands = relationship('Article', back_populates='admin')
    umbrellas = relationship('Umbrella', back_populates='admin')
    articles = relationship('Article', back_populates='admin')
    users = relationship('User', back_populates='admin')
    rents = relationship('Rent', back_populates='admin')

    class Config:
        arbitrary_types_allowed = True