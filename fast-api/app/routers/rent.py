from fastapi import APIRouter

import app.repositories.rent as dao
from app.schemas.rent import Rent


router = APIRouter()


