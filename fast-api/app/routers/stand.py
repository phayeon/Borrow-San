from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import app.repositories.user as dao
from app.database import get_db
from app.models.stand import Stand

router = APIRouter()


@router.post('/')
async def join(item: Stand, db: Session = Depends(get_db)):
    user_dict = item.dict()
    print(f'SignUp Inform : {user_dict}')
    dao.join(item, db)
    return {'data': 'Success'}


@router.post('/{id}')
async def login(id: str, item: Stand, db: Session = Depends(get_db)):
    dao.login(id, item, db)
    return {'data': 'Success'}


@router.put('/{id}')
async def update(id: str, item: Stand, db: Session = Depends(get_db)):
    dao.update(id, item, db)
    return {'data': 'Success'}


@router.delete('/{id}')
async def delete(id: str, item: Stand, db: Session = Depends(get_db)):
    dao.delete(id, item, db)
    return {'data': 'Success'}


@router.get('/email/{id}')
async def get_stand(id: str, db: Session = Depends(get_db)):
    dao.find_user(id, db)
    return {'data': 'Success'}


@router.get('/{page}')
async def get_stands(page: int, db: Session = Depends(get_db)):
    return {'data': dao.find_users(page, db)}

