const API = import.meta.env.VITE_API_URL;

export async function searchMovies(query) {
  const res = await fetch(`${API}/search?query=${encodeURIComponent(query)}`);
  return res.json();
}
export async function getMovie(id) {
  const res = await fetch(`${API}/movie/${id}`);
  return res.json();
}
export async function getFavorites() {
  const res = await fetch(`${API}/favorites`);
  return res.json();
}
export async function addFavorite(movieId) {
  const res = await fetch(`${API}/favorites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ movieId }),
  });
  return res.json();
}
export async function removeFavorite(movieId) {
  await fetch(`${API}/favorites/${movieId}`, { method: 'DELETE' });
}
export async function createShareLink() {
  const res = await fetch(`${API}/share`, { method: 'POST' });
  return res.json(); // { token }
}
export async function getSharedList(token) {
  const res = await fetch(`${API}/share/${token}`);
  return res.json(); // { movieIds: [] }
}
