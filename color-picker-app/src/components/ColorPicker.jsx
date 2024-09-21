import React, {useState} from 'react'

function ColorPicker() {
    const [color, setColor] = useState("grey")

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(
        <div className="color-container">
            <h1 className="header">Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
               <p>Selected color: <br/> {color}</p>
            </div>
            <label>Select a color:</label><br/>
            <input type="color" value={color} onChange={handleColorChange}></input>
        </div>
    );
}

export default ColorPicker;