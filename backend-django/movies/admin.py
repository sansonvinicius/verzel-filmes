from django.contrib import admin
from .models import Favorite, ShareLink

@admin.register(Favorite)
class FavoriteAdmin(admin.ModelAdmin):
    list_display = ('movie_id', 'created_at')

@admin.register(ShareLink)
class ShareLinkAdmin(admin.ModelAdmin):
    list_display = ('token', 'created_at')
