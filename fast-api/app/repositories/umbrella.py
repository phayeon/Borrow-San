import pymysql
from sqlalchemy.orm import Session

from app.models.umbrella import Umbrella

pymysql.install_as_MySQLdb()


def find_stands(db: Session):
    return db.query(Umbrella).all()
