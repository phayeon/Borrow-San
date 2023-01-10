import pymysql
from app.models.post import Post
from sqlalchemy.orm import Session

pymysql.install_as_MySQLdb()


def find_posts(db: Session):
    return db.query(Post).all()
