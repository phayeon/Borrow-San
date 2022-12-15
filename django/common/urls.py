from django.urls import re_path as url
from common import views

urlpatterns = [
    url(r'applogin', views.applogin),# 연결 확인
    url(r'appmain', views.appmain),# 연결 확인
    url(r'appmainrent', views.appmainrent),# 연결 확인
    url(r'appsetpayinfo', views.appsetpayinfo),# 연결 확인
    url(r'appsetpaymodify', views.appsetpaymodify),# 연결 확인
    url(r'appsetsettings', views.appsetsettings),# 연결 확인
    url(r'appsetuinfo', views.appsetuinfo),# 연결 확인
    url(r'appstart', views.appstart),# 연결 확인
    url(r'main', views.main),# 연결 확인
    url(r'mngclaim', views.mngclaim),# 연결 확인
    url(r'mngdemand', views.mngdemand),# 연결 확인
    url(r'mngmenu', views.mngmenu),# 연결 확인
    url(r'mngnotice', views.mngnotice),# 연결 확인
    url(r'mnguserinfo', views.mnguserinfo),# 연결 확인
]