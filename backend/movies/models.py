from django.db import models
from django.core.validators import MaxValueValidator,MinValueValidator
from django.utils import timezone

class Movies(models.Model):
    title = models.CharField(max_length = 500)
    genre = models.JSONField(default = list)
    cast = models.JSONField(default=list)
    crew = models.JSONField(default = list)
    year = models.PositiveIntegerField()
    overview = models.TextField(max_length = 2000)
    rating  = models.FloatField(validators = [MaxValueValidator(5),MinValueValidator(0)])
    date_added = models.DateTimeField(default = timezone.now)
    
    def __str__(self) -> str:
        return self.title