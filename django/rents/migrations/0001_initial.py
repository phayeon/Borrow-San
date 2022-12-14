# Generated by Django 4.1.3 on 2022-12-05 00:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
        ('admins', '0001_initial'),
        ('umbrellas', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Rent',
            fields=[
                ('rent_id', models.AutoField(primary_key=True, serialize=False)),
                ('disrepair', models.IntegerField()),
                ('rent_time', models.DateTimeField(auto_now_add=True)),
                ('return_time', models.DateTimeField(auto_now=True)),
                ('admin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='admins.admin')),
                ('umbrella', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='umbrellas.umbrella')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user')),
            ],
            options={
                'db_table': 'rents',
            },
        ),
    ]
