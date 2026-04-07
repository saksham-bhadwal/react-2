import { useEffect, useState } from "react";


export default function Search({ onSearch }) {
    useEffect(() => {
        onSearch("kangra");
    }, []);

    const [city, setCity] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!city.trim()) return;
        onSearch(city.trim());
        setCity("");
    }

    return (
        <>
            <div className="flex w-full h-full justify-center text-center m-6 ">
                <form className="flex gap-2 " onSubmit={handleSubmit}>


                    <input className="border rounded text-center w-[550px] ml-[-50px]" type="text" placeholder="enter city name..." value={city} onChange={(e) => setCity(e.target.value)} />
                    <button className="font-bold" type="submit">🔍︎</button>

                </form>
            </div>
        </>
    )
}