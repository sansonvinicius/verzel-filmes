import os, json, requests, secrets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Favorite, ShareLink
from .serializers import FavoriteSerializer

TMDB_BASE = 'https://api.themoviedb.org/3'
TMDB_KEY = os.getenv('TMDB_API_KEY')

def tmdb_get(path, params=None):
    if params is None:
        params = {}
    params.update({'api_key': TMDB_KEY, 'language': 'pt-BR'})
    r = requests.get(f'{TMDB_BASE}{path}', params=params, timeout=15)
    return r

@api_view(['GET'])
def search(request):
    q = (request.GET.get('query') or '').strip()
    if not q:
        return Response([])
    r = tmdb_get('/search/movie', {'query': q})
    if r.status_code != 200:
        return Response({'error': 'TMDb error'}, status=500)
    return Response(r.json().get('results', []))

@api_view(['GET'])
def movie(request, id):
    r = tmdb_get(f'/movie/{id}')
    if r.status_code != 200:
        return Response({'error': 'not found'}, status=404)
    return Response(r.json())

@api_view(['GET', 'POST'])
def favorites(request):
    if request.method == 'GET':
        data = FavoriteSerializer(Favorite.objects.all().order_by('-created_at'), many=True).data
        return Response(data)

    # POST
    movie_id = request.data.get('movieId')
    if not movie_id:
        return Response({'error': 'movieId required'}, status=400)
    fav, _ = Favorite.objects.get_or_create(movie_id=movie_id)
    return Response(FavoriteSerializer(fav).data, status=201)

@api_view(['DELETE'])
def favorite_delete(request, movie_id):
    try:
        Favorite.objects.get(movie_id=movie_id).delete()
        return Response(status=204)
    except Favorite.DoesNotExist:
        return Response({'error': 'not found'}, status=404)

@api_view(['POST'])
def share(request):
    ids = list(Favorite.objects.values_list('movie_id', flat=True))
    token = secrets.token_hex(8)
    ShareLink.objects.create(token=token, movie_ids=json.dumps(ids))
    return Response({'token': token})

@api_view(['GET'])
def share_get(request, token):
    try:
        s = ShareLink.objects.get(token=token)
        return Response({'movieIds': json.loads(s.movie_ids)})
    except ShareLink.DoesNotExist:
        return Response({'error': 'invalid'}, status=404)
