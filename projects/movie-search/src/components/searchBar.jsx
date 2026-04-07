import { useState } from "react"

function Search({ movie }) {

    const [data, setData] = useState("")
    const handleMovie = () => {
        if (data.trim()) {
            movie(data.trim());
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleMovie();
        }
    }

    return (
        <div className="flex justify-center mb-8">
            <div className="flex w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleMovie}
                    className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Search
                </button>
            </div>
        </div>
    )

}

export default Search