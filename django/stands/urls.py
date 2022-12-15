from django.urls import re_path as url
from stands import views

urlpatterns = [
    url(r'mngbox', views.Mng_Box_Get)
]