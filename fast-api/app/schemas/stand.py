from uuid import UUID
import pydantic


class Stand(pydantic.BaseModel):
    stand_id = UUID
    district = str
    latitude = int
    longitude = int
