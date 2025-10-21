import { useEffect, useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import MovieDetails from '../components/MovieDetails'
import Favorites from '../components/Favorites'
import { searchMovies, getMovie, getFavorites, addFavorite, removeFavorite, createShareLink } from '../api'

export default function Home() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [favIds, setFavIds] = useState([])
  const [details, setDetails] = useState(null)
  const [shareUrl, setShareUrl] = useState('')

  useEffect(() => {
    (async () => {
      const favs = await getFavorites()
      setFavIds(favs.map(f => f.movie_id || f.movieId || f.movieId)) // compat
    })()
  }, [])

  async function doSearch(e) {
    e.preventDefault()
    const data = await searchMovies(query)
    setResults(data)
  }

  async function openDetails(id) {
    const m = await getMovie(id)
    setDetails(m)
  }

  async function toggleFav(id) {
    if (favIds.includes(id)) {
      await removeFavorite(id)
      setFavIds(favIds.filter(x => x !== id))
    } else {
      await addFavorite(id)
      setFavIds([...favIds, id])
    }
  }

  async function share() {
    const { token } = await createShareLink()
    const url = `${window.location.origin}/share/${token}`
    setShareUrl(url)
    await navigator.clipboard?.writeText(url).catch(() => {})
    alert(`Link copiado: ${url}`)
  }

  const resultCards = useMemo(() =>
    results.map(movie => (
      <MovieCard
        key={movie.id}
        movie={movie}
        isFav={favIds.includes(movie.id)}
        onDetails={openDetails}
        onFavToggle={toggleFav}
      />
    ))
  , [results, favIds])

  return (
    <>
      <SearchBar value={query} onChange={setQuery} onSubmit={doSearch} />
      <div style={{display:'grid', gridTemplateColumns:'2fr 1fr', gap:16, marginTop:16}}>
        <div>
          <div className="grid">{resultCards}</div>
        </div>
        <div>
          <Favorites ids={favIds} onRemove={toggleFav} onShare={share} />
          {shareUrl && (
            <div className="card" style={{marginTop:12}}>
              <p><strong>Link para compartilhar:</strong></p>
              <a href={shareUrl}>{shareUrl}</a>
            </div>
          )}
        </div>
      </div>
      <MovieDetails movie={details} onClose={() => setDetails(null)} />
    </>
  )
}
