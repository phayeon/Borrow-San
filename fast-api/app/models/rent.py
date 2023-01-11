from sqlalchemy.orm import relationship
from sqlalchemy_utils import UUIDType
from .mixins import TimestampMixin
from ..database import Base
from sqlalchemy import Column, Integer, ForeignKey, DATETIME as Datetime


class Rent(Base, TimestampMixin):

    __tablename__ = "rents"

    rend_seq = Column(Integer, autoincrement=True, primary_key=True)
    disrepair = Column(Integer, nullable=False)
    rent_time = Column(Datetime, nullable=False)
    return_time = Column(Datetime, nullable=False)
    user_id = Column(UUIDType(binary=False), ForeignKey('user.user_id'))
    umb_id = Column(Integer, ForeignKey('umbrella.umb_seq'))

    user = relationship('User', back_populates='rents')
    umbrella = relationship('Stand', back_populates='rents')

    class Config:
        arbitrary_types_allowed = True
