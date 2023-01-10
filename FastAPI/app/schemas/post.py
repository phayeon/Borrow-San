from datetime import datetime

import pydantic


class Post(pydantic.BaseModel):
    post_id: int
    title: str
    content: str
    create_at: datetime
    updated_at: datetime
