import datetime
from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractUser

# # Create your models here.

class AllFlixUserManager(BaseUserManager):
    def create_user(self,email,password = None,**extra_fields):
        if not email:
            raise ValueError('Invalid Email')
        email = self.normalize_email(email)
        user = self.model(email = email,**extra_fields)
        user.set_password(password)
        user.save(using = self._db)
        return user
        
    def create_superuser(self,email,password=None,**extra_fields):
        extra_fields.setdefault('is_staff',True)
        if not extra_fields.get('is_staff'):
            raise ValueError('is_staff is not set to True')
        extra_fields.setdefault('is_superuser',True)
        if not extra_fields.get('is_superuser'):
            raise ValueError('is_superuser is not set to True')
        return self.create_user(email,password,**extra_fields)

class AllFlixUser(AbstractUser):
    email = models.EmailField('email',unique =True)
    username = models.CharField('username',unique = True)
    first_name = models.CharField('first_name',blank = False,default = '')
    last_name = models.CharField('last_name',default = '')
    DOB = models.DateField('DOB', default = datetime.date(2020,10,10))
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','first_name']
    
    objects = AllFlixUserManager()
    
    def __str__(self):
        return self.email
    