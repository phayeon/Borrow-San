from django.urls import re_path as url

from admins import views

urlpatterns = [
    url(r'managing', views.managing)
]