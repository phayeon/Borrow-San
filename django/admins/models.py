from django.db import models


class Admin(models.Model):
    use_in_migration = True
    admin_id = models.AutoField(primary_key=True)
    name = models.TextField()
    notice = models.TextField()

    class Meta:
        db_table = "admins"

    def __str__(self):
        return f'{self.admin_id} {self.name} {self.notice}'