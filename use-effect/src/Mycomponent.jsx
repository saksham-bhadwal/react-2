import { useEffect } from "react"
import { useState } from "react"

function Mycomponent() {

    const [count, setcount ] = useState(0)

    useEffect(()=>{
       window.alert("hello")
    },[count])

    function increase() {
        setcount(c => c+1)
    }

    return(
        <>
    <h1>count: {count}</h1>
    <button onClick={increase}>add count</button>
        </>
    )
}

export default Mycomponent