from django.urls import path
from . import views

urlpatterns = [
    path('search', views.search),
    path('movie/<int:id>', views.movie),
    path('favorites', views.favorites),
    path('favorites/<int:movie_id>', views.favorite_delete),
    path('share', views.share),
    path('share/<str:token>', views.share_get),
]
