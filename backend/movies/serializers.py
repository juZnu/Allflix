from rest_framework import serializers
from .models import Movies

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = ['id','title','genre','cast','crew','year','overview','rating','date_added']