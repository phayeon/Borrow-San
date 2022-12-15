from django.urls import re_path as url
from users import views

urlpatterns = [
    url(r'appsignup', views.App_Sign_Up_Get),
    url(r'appsetumodify', views.App_Set_U_Modify_Get),
    url(r'appsetmain', views.App_Set_Main_Get),
]