export default function Favorites({ ids, onRemove, onShare }) {
    return (
      <div className="card">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <h3 style={{margin:'8px 0'}}>Favoritos ({ids.length})</h3>
          <button className="button primary" onClick={onShare} disabled={!ids.length}>
            Gerar link
          </button>
        </div>
        {ids.length === 0 ? (
          <p>Nenhum favorito ainda.</p>
        ) : (
          <ul style={{margin:0, paddingLeft:16}}>
            {ids.map((id) => (
              <li key={id} style={{marginBottom:6}}>
                #{id} <button className="button" onClick={()=>onRemove(id)} style={{marginLeft:8}}>Remover</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
  