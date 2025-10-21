from django.db import models

class Favorite(models.Model):
    movie_id = models.IntegerField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Favorite(movie_id={self.movie_id})'

class ShareLink(models.Model):
    token = models.CharField(max_length=32, unique=True)
    movie_ids = models.TextField()  # guardamos JSON com os IDs
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'ShareLink(token={self.token})'
