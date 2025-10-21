export default function MovieCard({ movie, onDetails, onFavToggle, isFav }) {
    const img = movie.poster_path
      ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
      : 'https://via.placeholder.com/342x513?text=Sem+Poster';
    const rating = Math.round((movie.vote_average || 0) * 10) / 10;
  
    return (
      <div className="card">
        <img src={img} alt={movie.title} style={{width:'100%', borderRadius:8}} />
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:8}}>
          <strong>{movie.title}</strong>
          <span className="badge">{rating}</span>
        </div>
        <div style={{display:'flex', gap:8, marginTop:8}}>
          <button className="button" onClick={() => onDetails(movie.id)}>Detalhes</button>
          <button className="button" onClick={() => onFavToggle(movie.id)}>
            {isFav ? 'Remover' : 'Favoritar'}
          </button>
        </div>
      </div>
    )
  }
