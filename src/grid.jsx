import { createContext, useState } from 'react';
import Cell from './Cell';
import './grid.css'

export const GridContext = createContext();

export default function Grid() {
    //useState to track count of ON cells
    const [count, setCount] = useState(0);

    function updateCount(isCellOn) {
        setCount(x => x + (isCellOn ? 1 : -1)); 
    }

    return (
        //allow child components to access counts and updatecount function (linked to providor for updates) using useContext.
        <GridContext.Provider value={{ count, updateCount }}>
            <div>
                <h2>Count: {count}</h2>
                <div className="grid">
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </div>
            </div>
        </GridContext.Provider>
    );
};