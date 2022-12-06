from django.db import models

from admins.models import Admin
from umbrellas.models import Umbrella
from users.models import User


class Rent(models.Model):
    use_in_migration = True
    rent_id = models.AutoField(primary_key=True)
    disrepair = models.IntegerField()
    rent_time = models.DateTimeField(auto_now_add=True)
    return_time = models.DateTimeField(auto_now=True)

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    umbrella = models.ForeignKey(Umbrella,  on_delete=models.CASCADE)
    admin = models.ForeignKey(Admin, on_delete=models.CASCADE)


    class Meta:
        db_table = "rents"

    def __str__(self):
        return f'{self.rent_id} {self.disrepair} {self.rent_time} {self.return_time} {self.user} {self.umbrella} {self.admin}'