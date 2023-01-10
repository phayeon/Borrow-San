from sqlalchemy.orm import relationship
from sqlalchemy_utils import UUIDType

from .mixins import TimestampMixin
from ..database import Base
from sqlalchemy import Column, String, Integer, ForeignKey


class Umbrella(Base, TimestampMixin):

    __tablename__ = "umbrellas"

    umb_seq = Column(Integer, autoincrement=True, primary_key=True)
    disrepair_rate = Column(Integer, nullable=False)
    image_url = Column(String(50), nullable=False)
    status = Column(String(10), nullable=False)
    stand_id = Column(UUIDType(binary=False), ForeignKey(''))

    stand = relationship('Stand', back_populates='umbrellas')

    class Config:
        arbitrary_types_allowed = True
