from datetime import datetime
from uuid import UUID

import pydantic


class Rent(pydantic.BaseModel):
    rent_id: int
    disrepair: int
    rent_time: datetime
    return_time: datetime
    admin_id: UUID
    user_id: UUID
    umb_id: int