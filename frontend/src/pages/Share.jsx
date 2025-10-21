import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSharedList, getMovie } from '../api'
import MovieCard from '../components/MovieCard'
import MovieDetails from '../components/MovieDetails'

export default function Share() {
  const { token } = useParams()
  const [ids, setIds] = useState([])
  const [movies, setMovies] = useState([])
  const [details, setDetails] = useState(null)

  useEffect(() => {
    (async () => {
      const data = await getSharedList(token)
      setIds(data.movieIds || [])
    })()
  }, [token])

  useEffect(() => {
    (async () => {
      const arr = []
      for (const id of ids) {
        arr.push(await getMovie(id))
      }
      setMovies(arr)
    })()
  }, [ids])

  return (
    <div>
      <h2>Lista compartilhada</h2>
      <div className="grid" style={{marginTop:16}}>
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            movie={m}
            isFav={false}
            onDetails={(id) => getMovie(id).then(setDetails)}
            onFavToggle={() => {}}
          />
        ))}
      </div>
      <MovieDetails movie={details} onClose={() => setDetails(null)} />
    </div>
  )
}
