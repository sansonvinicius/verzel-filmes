export default function SearchBar({ value, onChange, onSubmit }) {
    return (
      <form onSubmit={onSubmit} style={{display:'flex', gap:8}}>
        <input
          type="text"
          placeholder="Busque um filme (ex.: Matrix)"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button className="button primary" type="submit">Buscar</button>
      </form>
    )
  }
  