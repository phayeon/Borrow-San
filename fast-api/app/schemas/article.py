from datetime import datetime
import pydantic


class Article(pydantic.BaseModel):
    article_id: int
    title: str
    type: str
    text: str
    reference_id : str
    create_at: datetime
    updated_at: datetime

