from rest_framework import serializers
from .models import AllFlixUser

class AllFlixUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AllFlixUser
        fields = ['email','username','DOB','password','first_name','last_name']
        
    def create(self, validated_data):
        return AllFlixUser.objects.create_user(**validated_data)   
    
    def update(self, instance, validated_data):
        instance.email = validated_data.get('email',instance.email)
        instance.username = validated_data.get('username',instance.username)
        instance.DOB = validated_data.get('DOB',instance.DOB)
        instance.first_name = validated_data.get('first_name',instance.first_name)
        instance.last_name = validated_data.get('last_name',instance.last_name)
        return instance