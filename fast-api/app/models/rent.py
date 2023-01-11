from sqlalchemy_utils import UUIDType
from ..database import Base
from sqlalchemy import Column, Integer, ForeignKey, DATETIME as Datetime


class Rent(Base):

    __tablename__ = "rents"

    rent_id = Column(Integer, autoincrement=True, primary_key=True)
    disrepair = Column(Integer, nullable=False)
    rent_time = Column(Datetime, nullable=False)
    return_time = Column(Datetime, nullable=False)

    admin_id = Column(UUIDType(binary=False), ForeignKey('admins.admin_id'))
    user_id = Column(UUIDType(binary=False), ForeignKey('users.user_id'))
    umb_id = Column(Integer, ForeignKey('umbrellas.umb_id'))

    class Config:
        arbitrary_types_allowed = True
