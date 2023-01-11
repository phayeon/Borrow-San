import pymysql
from sqlalchemy.orm import Session

from app.models.rent import Rent

pymysql.install_as_MySQLdb()


def find_stands(db: Session):
    return db.query(Rent).all()
