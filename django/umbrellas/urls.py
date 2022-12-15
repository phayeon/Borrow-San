from django.urls import re_path as url
from umbrellas import views
urlpatterns = [
    url(r'appimgreturn', views.appimgreturn),
    url(r'appimgumb', views.appimgumb),
    url(r'appqrinput', views.appqrinput),
    url(r'appqrscan', views.appqrscan),
    url(r'mngdamage', views.mngdamage)
]