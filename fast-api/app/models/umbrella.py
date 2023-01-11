from sqlalchemy.orm import relationship
from sqlalchemy_utils import UUIDType

from ..database import Base
from sqlalchemy import Column, String, Integer, ForeignKey


class Umbrella(Base):

    __tablename__ = "umbrellas"
    umb_id = Column(Integer, autoincrement=True, primary_key=True)
    disrepair_rate = Column(Integer, nullable=False)
    image_url = Column(String(50), nullable=False)
    status = Column(String(10), nullable=False)

    admin_id = Column(UUIDType(binary=False), ForeignKey('admins.admin_id'))
    stand_id = Column(UUIDType(binary=False), ForeignKey('stands.stand_id'))

    rents = relationship('Rent', back_populates='umbrella')

    class Config:
        arbitrary_types_allowed = True
