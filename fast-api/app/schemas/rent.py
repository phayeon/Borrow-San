from datetime import datetime
import pydantic


class Rent(pydantic.BaseModel):
    rend_seq: int
    disrepair: int
    rent_time: datetime
    return_time: datetime
