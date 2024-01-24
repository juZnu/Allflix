from django.urls import path
from . import views

urlpatterns = [
    path('movies/',views.allMovies),
    path('addMovies/',views.addMovie),
    path('movie/<int:pk>/',views.getMovie)

]
