import pymysql
from sqlalchemy.orm import Session
from fast_api.app.models.article import Article

pymysql.install_as_MySQLdb()


def find_articles(db: Session):
    return db.query(Article).all()
