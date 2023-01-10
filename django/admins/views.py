from django.http import JsonResponse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser

@api_view(['GET'])
@parser_classes([JSONParser])
def managing(request):
    print(f'Enter Manage with {request}')
    return JsonResponse({'Response originTest ': 'SUCCESS'})