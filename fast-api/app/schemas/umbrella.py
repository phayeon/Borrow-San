import pydantic


class Umbrella(pydantic.BaseModel):
    umb_seq: int
    disrepair_rate: int
    image_url: str
    status: str
