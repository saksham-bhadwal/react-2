import { useState } from "react"

function ColorPicker() {
    const [color, setcolor] = useState("#FFFFFF")

    function changeColor(e) {
        setcolor(e.target.value)
    }

    return (
        <div className="container" style={{ backgroundColor: color }} >
            <h1>ColorPicker</h1>
            <div className="colordisplay" >
              <p>  selected color: {color}</p>
            </div>
            <label >Select a color :</label>
            <input type="color" onChange={changeColor} value={color} />
        </div>
    )
}

export default ColorPicker