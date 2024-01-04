from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from .serializers import AllFlixUserSerializer
from django.contrib.auth import authenticate

@api_view(['POST'])
def signup(request):
    userSerializer =  AllFlixUserSerializer(data = request.data)
    if userSerializer.is_valid():
        userSerializer.save()
        return Response({'success': status.HTTP_200_OK})
    return Response({'Error': status.HTTP_400_BAD_REQUEST})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    print(email,password)
    user = authenticate(email= email,password = password)
    if user:
        return Response({'success':status.HTTP_200_OK,'Token':Token.objects.get(user=user).key})
    else:
        return Response({'ERROR':status.HTTP_401_UNAUTHORIZED})
  
@api_view(['GET'])
def data(request):
    user = request.user
    print(user.DOB)
    return Response({'user':user.id} if user.id else {'Response': status.HTTP_404_NOT_FOUND}) 