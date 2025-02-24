import { useState } from 'react'
import './Cell.css'

export default function Cell({ updateGrid }) {
    //useState to track status of cell on/off
    const [isOn, setIsOn] = useState(false)

    function UpdateCellOnClick() {
        //update isOn state variable
        setIsOn(!isOn);
        //trigger update function in parent(Grid)
        updateGrid(!isOn);
    }

    return (
        <div
          onClick = {UpdateCellOnClick}
          className = "cell"
          style={{
            // false if cell is off, while if cell is on
            backgroundColor: isOn ? 'black' : 'white',
          }}
        ></div>
    );
};