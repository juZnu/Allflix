from rest_framework import serializers
from .models import AllflixUser

class AllflixUserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = AllflixUser
        fields = ['email','username','DOB']
        
    def create(self,**validated_data):
        return AllflixUser.objects.create_user(**validated_data)
    
    def update(self,instance,**validated_data):
        
        instance.email = validated_data.get('email',instance.email)
        instance.username = validated_data.get('username',instance.username)
        instance.date_of_birth = validated_data.get('date_of_birth', instance.date_of_birth)
        instance.save()
        return instance
        