from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractUser

# Create your models here.

class AllflixUserManager(BaseUserManager):
    def create_user(self,email,password=None,**extra_fields):
        if not email:
            raise ValueError('Email is not Provided')
        email = self.normalize_email(email)
        user = self.model(email=email,**extra_fields)
        user.set_password(password)
        user.save(using = self._db)
        return user
    
    def create_superuser(self,email,password=None,**extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_superuser',True)
        if extra_fields.get('is_staff') is not True:
            raise ValueError('is_staff is not set to True')
        elif extra_fields.get('is_superuser') is not True:
            raise ValueError('is_superuser is not set to True')
        return self.create_user(email,password,**extra_fields)

class AllflixUser(AbstractUser):
    email = models.EmailField('email', unique = True)
    username = models.CharField('username', unique = True)
    date_of_birth = models.DateField('DOB', blank = True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    objects = AllflixUserManager()
    
    def __str__(self):
        return self.email
    