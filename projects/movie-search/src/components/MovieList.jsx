import MovieCard from "./MovieCard"
function MovieList({ list }) {

    if (!list.length) return <p className="text-center text-gray-500 mt-8">No movies found. Try a different search.</p>

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {list.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
    )
}

export default MovieList