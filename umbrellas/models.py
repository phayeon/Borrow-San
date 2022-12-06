from django.db import models

from admins.models import Admin
from stands.models import Stand


class Umbrella(models.Model):
    use_in_migration = True
    umbrella_id = models.AutoField(primary_key=True)
    disrepair_rate = models.FloatField()
    image_url = models.TextField()
    status = models.TextField()

    stand = models.ForeignKey(Stand, on_delete=models.CASCADE)
    admin = models.ForeignKey(Admin, on_delete=models.CASCADE)


    class Meta:
        db_table = "umbrellas"

    def __str__(self):
        return f'{self.umbrella_id} {self.disrepair_rate} {self.image_url} {self.status} {self.stand} {self.admin}'