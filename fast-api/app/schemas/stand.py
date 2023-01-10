import pydantic


class Stand(pydantic.BaseModel):
    stand_id = int
    district = str
    latitude = int
    longitude = int
