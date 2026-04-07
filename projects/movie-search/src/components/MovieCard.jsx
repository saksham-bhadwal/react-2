function MovieCard({ movie }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
                alt={movie.Title}
                className="w-full h-64 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 truncate">{movie.Title}</h3>
                <p className="text-gray-600">{movie.Year}</p>
                <p className="text-sm text-gray-500 capitalize">{movie.Type}</p>
            </div>
        </div>
    )
}

export default MovieCard