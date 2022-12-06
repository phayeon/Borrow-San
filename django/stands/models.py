from django.db import models

from admins.models import Admin


class Stand(models.Model):
    use_in_migration = True
    stand_id = models.AutoField(primary_key=True)
    district = models.TextField()
    latitude = models.FloatField()
    longitude = models.FloatField()

    admin = models.ForeignKey(Admin, on_delete=models.CASCADE)


    class Meta:
        db_table = "stands"

    def __str__(self):
        return f'{self.stand_id} {self.district} {self.latitude} {self.longitude} {self.admin}'