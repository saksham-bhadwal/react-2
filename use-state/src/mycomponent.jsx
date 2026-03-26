import React, { useState } from "react"

function MyComponent() {
    const [name, setName] = useState("guest")
    const [age, setAge] = useState(0)
    const [height, setheight] = useState()
    const [ship, setship] = useState("")

    const updateName = () => {
        setName("saksham")
    }

    const updateAge = () => {
        setAge(age + 1)
    }
    const resetAge = () => {
        setAge(0)
    }
    const decreaseAge = () => {
        if (age == 0) {
            setAge(0)
        }
        else {
            setAge(age - 1)
        }
    }
    function heightchange(e) {
        setheight(e.target.value)
    }

    function handleShipping(e) {
        setship(e.target.value)
    }

    return (
        <>
            <p className="name" >Name : {name}
                <button onClick={updateName}>set name</button>
            </p>
            <p>Age : {age}
                <button onClick={updateAge}>increase Age</button>
                <button onClick={decreaseAge}>decrease Age</button>
                <button onClick={resetAge}>Reset Age</button>

                <br />
                <input value={height} onChange={heightchange} placeholder="enter your height" />
                <p>Height: {height}</p>
            </p>

            <label > <input type="radio" value="Pick up" checked = {ship === "Pick up"} onChange={handleShipping} /> 
             pickup</label>
            <label > <input type="radio" value="delivery" checked={ship === "delivery"} onChange={handleShipping} />
             delivery</label>

            <p>Shipping: {ship}</p>
        </>
    )
}

export default MyComponent