import React, { useState } from "react"

function MyComponent() {
    const [name, setName] = useState("guest")
    const [age, setAge] = useState(0)
    const [height, setheight] = useState()
    const [ship, setship] = useState("")

    const [car,setcar] = useState({model: "ford",
                                    make: "mustang",
                                    year:2026
     })

     const [foods, setfoods] =useState(["apple", "mango", "pineapple"])

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

    function caryear(e) {
        setcar(c => ({...c, year: e.target.value})) //update functions
    }
    function carmake(e) {
        setcar({...car, make: e.target.value})
    }
    function carmodel(e) {
        setcar({...car, model: e.target.value})
    }




    function handlefood() {
        const newfood = document.getElementById("foodinput").value
        document.getElementById("foodinput").value =""
        setfoods( f =>  [...f , newfood])
    }

    function removefood(index) {
        setfoods(foods.filter(( _ ,i) => i!==index))
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


 //update object 

        <p>your fav car : {car.year} {car.model} {car.make} </p>

            <input type="number" value={car.year} onChange={caryear} />
            <input type="text" value={car.model} onChange={carmodel} />
            <input type="text" value={car.make} onChange={carmake} />


  // update array

        <h2>list of food</h2>
        <ul>
            {foods.map((food,index) => 
            <li key={index} 
            >{food} <button onClick={() => removefood(index)}>remove</button></li> )}
            
        </ul>

        <input type="text" id="foodinput" placeholder="enter food name"  />
        <button onClick={handlefood}>add food</button>
        </>
    )
}

export default MyComponent