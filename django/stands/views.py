from django.http import JsonResponse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser

from stands.service import Mng_BoxService


@api_view(['GET'])
@parser_classes([JSONParser])
def Mng_Box_Get(request):
    print(f'Mng_Box_Get : {request}')
    Mng_BoxService().hook()
    return JsonResponse({'Response Test ': 'SUCCESS'})

