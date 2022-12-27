from django.http import JsonResponse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser
@api_view(['POST'])
@parser_classes([JSONParser])
def appimgreturn(request):
    print(f'Enter Blog-Login with {request}')
    return JsonResponse({'Response Test ': 'imgreturn SUCCESS'})

@api_view(['POST'])
@parser_classes([JSONParser])
def appimgumb(request):
    print(f'Enter Blog-Login with {request}')
    return JsonResponse({'Response Test ': 'appimgumb SUCCESS'})

@api_view(['POST'])
@parser_classes([JSONParser])
def appqrinput(request):
    print(f'Enter Blog-Login with {request}')
    return JsonResponse({'Response Test ': 'appqrinput SUCCESS'})

@api_view(['POST'])
@parser_classes([JSONParser])
def appqrscan(request):
    print(f'Enter Blog-Login with {request}')
    return JsonResponse({'Response Test ': 'appqrscan SUCCESS'})

@api_view(['POST'])
@parser_classes([JSONParser])
def mngdamage(request):
    print(f'Enter Blog-Login with {request}')
    return JsonResponse({'Response Test ': 'mngdamage SUCCESS'})