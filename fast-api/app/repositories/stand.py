import pymysql
from sqlalchemy.orm import Session

from app.models.stand import Stand

pymysql.install_as_MySQLdb()


def find_stands(db: Session):
    return db.query(Stand).all()