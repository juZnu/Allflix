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
    return Response({'error': status.HTTP_400_BAD_REQUEST})


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    print(email,password)
    user = authenticate(email= email,password = password)
    if user:
        token,created = Token.objects.get_or_create(user=user)
        return Response({'success':status.HTTP_200_OK,'Token':token.key})
    else:
        return Response({'error':status.HTTP_401_UNAUTHORIZED},status=status.HTTP_401_UNAUTHORIZED)
  
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def data(request):
    user = request.user
    print(user.DOB)
    return Response({'user':user.id,'first_name':user.first_name,'last_name':user.last_name,'email':user.email} if user.id else {'Response': status.HTTP_404_NOT_FOUND}) 