from sqlalchemy.orm import Session

from app.models.admin import Admin


def join(item, db):
    return None


def login(id, item, db):
    return None


def update(id, item, db):
    return None


def delete(id, item, db):
    return None


def find_admin(id, db):
    return None


def find_admins(page:int, db: Session):
    return db.query(Admin).all()


def get_admins_by_name(search, page, db):
    return None