import React, { useState } from "react";
import './App.css'; // Import the CSS file

function Mystate() {
    const [data, setData] = useState(0);

    function updatedata() {
        setData(data + 1);
    }
    
    function reset() {
        setData(0);
    }
    
    return (
        <div className="mystate-container">
            <h1> Tasbeeh Counter</h1>
            
            <h1> {data}</h1>
            
            <div className="button-container"> {/* Use the new button-container class */}
                <button className="update-button" onClick={updatedata}>Count</button>
                <button className="update-button" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default Mystate;
