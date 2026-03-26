import React, {useState} from "react"  

function MyComponent() {
    const[name, setName ]= useState("guest")
    const[age, setAge] = useState(0)

    const updateName = () =>{
      setName("saksham")
    }

    const updateAge =() =>{
        setAge(age+1)
    }
    const resetAge =() =>{
        setAge(0)
    }
    const decreaseAge =() =>{
        if (age==0) {
            setAge(0)
        }
        else{
            setAge(age-1)
        }
    }

    return(
        <div>
            <p className="name" >Name : {name}
                <button onClick={updateName}>set name</button>
            </p>
            <p>Age : {age}
                <button onClick={updateAge}>increase Age</button>
                <button onClick={decreaseAge}>decrease Age</button>
                <button onClick={resetAge}>Reset Age</button>
            </p>
        </div>
    )
}

export default MyComponent