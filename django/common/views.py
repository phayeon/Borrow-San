from django.http import JsonResponse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser


@api_view(['GET'])
@parser_classes([JSONParser])
def applogin(request):
    return JsonResponse({'Response Test ': 'SUCCESS'})

@api_view(['POST'])
@parser_classes([JSONParser])
def appmain(request):
    return JsonResponse({'Response Test ': 'SUCCESS'})

@api_view(['POST'])
@parser_classes([JSONParser])
def appmainrent(request):
    return JsonResponse({'Response Test ': 'SUCCESS'})

@api_view(['POST'])
@parser_classes([JSONParser])
def appsetpayinfo(request):
    return JsonResponse({'Response Test ': 'SUCCESS'})

@api_view(['POST'])
@parser_classes([JSONParser])
def appsetpaymodify(request):
    return JsonResponse({'Response Test ': 'SUCCESS'})

@api_view(['POST'])
@parser_classes([JSONParser])
def appsetsettings(request):
    return JsonResponse({'Response Test ': 'SUCCESS'})
@api_view(['POST'])
@parser_classes([JSONParser])
def appsetuinfo(request):
    return JsonResponse({'Response Test ': 'SUCCESS'})
@api_view(['POST'])
@parser_classes([JSONParser])
def appstart(request):
    return JsonResponse({'Response Test ': 'SUCCESS'})
@api_view(['POST'])
@parser_classes([JSONParser])
def main(request):
    return JsonResponse({'Response Test ': 'SUCCESS'})
@api_view(['POST'])
@parser_classes([JSONParser])
def mngclaim(request):
    return JsonResponse({'Response Test ': 'SUCCESS'})
@api_view(['POST'])
@parser_classes([JSONParser])
def mngdemand(request):
    return JsonResponse({'Response Test ': 'SUCCESS'})
@api_view(['POST'])
@parser_classes([JSONParser])
def mngmenu(request):
    return JsonResponse({'Response Test ': 'SUCCESS'})
@api_view(['POST'])
@parser_classes([JSONParser])
def mngnotice(request):
    return JsonResponse({'Response Test ': 'SUCCESS'})
@api_view(['POST'])
@parser_classes([JSONParser])
def mnguserinfo(request):
    return JsonResponse({'Response Test ': 'SUCCESS'})