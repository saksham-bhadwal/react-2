function Button() {

    let count = 0;

    // const handelclick = () => window.alert("ouchhh!..")
    const handelclick = (e) => e.target.textContent = "clicked" 
    const handelclick2 = (name) => {
        count++;
        window.alert(`${name} stop clicking me ${count} times`)
    }

    return (

        <button onClick={(e) => {
            handelclick(e)
        }
        }>click me </button>
    )
}

export default Button