import { useEffect, useState } from "react"
import Search from "./components/searchBar"
import { movieSearch } from "./services/api"
import MovieList from "./components/MovieList"

function App() {
  const [movie, setMovie] = useState("spider-man")
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError("")
      try {
        const data = await movieSearch(movie)
        setList(data.Search || [])
        if (!data.Search) {
          setError("No movies found")
        }
      } catch (err) {
        console.error(err)
        setError("Failed to fetch movies")
      }
      setLoading(false)
    }
    fetchData();
  }, [movie])

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Movie Search App</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Search movie={setMovie} />
        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-center mt-4 text-red-500">{error}</p>}
        <MovieList list={list} />
      </main>
    </div>
  )
}

export default App
