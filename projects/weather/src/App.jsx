import { useState } from "react"
import Search from "./components/search"
import Weather from "./components/weather"
import { getWeather,getForecast } from "./services/weatherApi"

function App() {
  const [weather, setWeather] = useState(null)
  const [item, setItem] = useState(null)  

  async function handleSubmit(city) {
    const weatherData = await getWeather(city)
    const forecastData = await getForecast(city)
    setItem(forecastData)
    setWeather(weatherData);
  }

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1a2540] text-white p-4">

      <Search onSearch={handleSubmit } />
      <Weather data={weather} item={item} />
    </div>

    </>
  )
}

export default App
