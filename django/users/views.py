from django.http import JsonResponse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser
import tensorflow as tf

from users.service import AppSignUp_Service


@api_view(['GET'])
@parser_classes([JSONParser])
def App_Sign_Up_Get(request):
    print(f'App_Sign_Up_Get : {request}')
    AppSignUp_Service().hook()
    return JsonResponse({'Response Test ': 'SUCCESS'})


@api_view(['GET'])
@parser_classes([JSONParser])
def App_Set_U_Modify_Get(request):
    print(f'App_Set_U_Modify_Get : {request}')
    AppSignUp_Service().hook()
    return JsonResponse({'Response Test ': 'SUCCESS'})


@api_view(['POST'])
@parser_classes([JSONParser])
def App_Set_Main_Get(request):
    print(f'App_Set_Main_Get : {request}')
    AppSignUp_Service().hook()
    return JsonResponse({'Response Test ': 'SUCCESS'})
