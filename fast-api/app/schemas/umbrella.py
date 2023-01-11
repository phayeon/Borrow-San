from uuid import UUID

import pydantic


class Umbrella(pydantic.BaseModel):
    umb_id: int
    disrepair_rate: int
    image_url: str
    status: str
    admin_id: UUID
    stand_id: UUID
