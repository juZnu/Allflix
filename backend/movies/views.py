from django.shortcuts import render
from django.shortcuts import get_object_or_404
from .serializers import MovieSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Movies
from rest_framework.decorators import api_view,permission_classes
# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def allMovies(request):
    movies = Movies.objects.all()
    serializer = MovieSerializer(movies,many= True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addMovie(request):
    serializer = MovieSerializer(data= request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'Success':status.HTTP_200_OK})
    return Response({'error':status.HTTP_401_UNAUTHORIZED})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMovie(request,pk):
    data = get_object_or_404(Movies,pk=pk)
    serializer = MovieSerializer(data)
    return Response(serializer.data)


