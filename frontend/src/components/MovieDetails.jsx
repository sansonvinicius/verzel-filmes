export default function MovieDetails({ movie, onClose }) {
    if (!movie) return null;
    const rating = Math.round((movie.vote_average || 0) * 10) / 10;
  
    return (
      <div className="modal" onClick={onClose}>
        <div className="box" onClick={(e)=>e.stopPropagation()}>
          <div style={{display:'flex', gap:16}}>
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : 'https://via.placeholder.com/342x513'}
              alt={movie.title}
              style={{borderRadius:8}}
            />
            <div>
              <h2 style={{marginTop:0}}>{movie.title} <span className="badge" style={{marginLeft:8}}>{rating}</span></h2>
              <p><strong>Lançamento:</strong> {movie.release_date || 'N/D'}</p>
              <p><strong>Sinopse:</strong> {movie.overview || 'Sem descrição'}</p>
              <button className="button" onClick={onClose} style={{marginTop:12}}>Fechar</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  