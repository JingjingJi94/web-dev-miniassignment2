import { useState,useContext } from 'react'
import { GridContext } from './Grid'
import './Cell.css'

export default function Cell() {
    //useState to track status of cell on/off
    const [isOn, setIsOn] = useState(false)

    //retrieves function in provider, only works if a provider in the parent component render
    const {updateCount} = useContext(GridContext)

    function UpdateCellOnClick() {
        //update isOn state variable
        setIsOn(!isOn);

        // update count in grid
        updateCount(!isOn);
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