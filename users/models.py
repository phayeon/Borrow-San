from django.db import models

from admins.models import Admin


class User(models.Model):
    use_in_migration = True
    user_id = models.AutoField(primary_key=True)
    email = models.TextField()
    password = models.TextField()
    birth = models.IntegerField()
    address = models.TextField()
    most_use_loc = models.TextField()
    count_month = models.IntegerField()
    cur_lat = models.FloatField()
    cur_lng = models.FloatField()
    pay_info = models.TextField()
    grade = models.IntegerField()
    claim = models.TextField()

    admin = models.ForeignKey(Admin, on_delete=models.CASCADE)

    class Meta:
        db_table = "users"

    def __str__(self):
        return f'{self.user_id} {self.email} {self.password} {self.birth} {self.address} {self.most_use_loc} {self.count_month} {self.cur_lat} {self.cur_lng} {self.pay_info} {self.grade} {self.claim} {self.admin}'
