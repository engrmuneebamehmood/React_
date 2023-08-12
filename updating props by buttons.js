
// updating props by button

import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Props from './Props';



function App() {
  
  const [name,setName]=useState("Muneeba")
  let skill="js"

  return (
    <div>

        <div className="">
     <h1> Props example</h1>
      <Props name={name} />
  
      <button onClick={()=>{setName("Tahir")}} >Update Name</button>
   
    </div>


<h2> The time is : {new Date().toLocaleTimeString()}</h2>
    
    </div>
  
  );
}

export default App;


//props.js

function Props(props) {
    console.log(props)
    return (
        <div style={{ backgroundColor: "skyblue", margin: 10 }}>
            <h1>Hello {props.name}</h1>
        </div>
    )
}

export default Props;




