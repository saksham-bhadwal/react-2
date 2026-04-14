import { useState, useEffect } from "react"

function Clock() {
    const [hour, sethour] = useState();
    const [min, setmin] = useState();
    const [sec, setsec] = useState();
    const meridiem = hour >=12 ? "PM" : "AM"

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date()
            sethour(now.getHours())
            setmin(now.getMinutes().toString().padStart(2, "0"))
            setsec(now.getSeconds().toString().padStart(2, "0"))
        }, 1000);
        return () => clearInterval(intervalId);
    }, [])

    function padzero(number) {
        return (number<10 ? "0": "")+ number
    }


    return (
        <>
            <h1>time:{hour} : {min} : {padzero(sec)} {meridiem}</h1>
        </>
    )
}

export default Clock