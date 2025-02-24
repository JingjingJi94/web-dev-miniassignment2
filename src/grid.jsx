import { useState } from 'react'
import Cell from './Cell';
import './grid.css'

export default function Grid() {
    //useState to track count of ON cells
    const [count, setCount] = useState(0);

    function updateCount(isCellOn) {
        setCount(x => x + (isCellOn ? 1 : -1)); 
    }

    return (
        <div>
        <h2>Count: {count}</h2>
        <div className = "grid" >
          <Cell updateGrid={updateCount} />
          <Cell updateGrid={updateCount} />
          <Cell updateGrid={updateCount} />
          <Cell updateGrid={updateCount} />
        </div>
      </div>
    );
};