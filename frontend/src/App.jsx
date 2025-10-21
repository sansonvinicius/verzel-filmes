import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Share from './pages/Share'

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Lista de Filmes</h1>
        <Link to="/" className="button">Início</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/share/:token" element={<Share />} />
      </Routes>
    </div>
  )
}
