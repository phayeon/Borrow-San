from django.db import models

from users.models import User


class Boards(models.Model):
    use_in_migration = True
    board_id = models.AutoField(primary_key=True)
    notice_title = models.TextField()
    notice_date = models.DateTimeField(auto_now_add=True)
    notice_text = models.TextField()
    claim_title = models.TextField()
    claim_date = models.DateTimeField(auto_now_add=True)
    claim_text = models.TextField()
    error_title = models.TextField()
    error_date = models.DateTimeField(auto_now_add=True)
    error_text = models.TextField()

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = "boards"

    def __str__(self):
        return f'{self.board_id} {self.notice_title} {self.notice_date} {self.notice_text} {self.claim_title} {self.claim_date} {self.claim_text} {self.error_title} {self.error_date} {self.error_text} {self.user}'