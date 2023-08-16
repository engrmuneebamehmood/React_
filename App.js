

import React,{useState} from 'react';
import logo from './logo.svg';
import './myanimal.css'

import AnimalShow from './AnimalShow';

function getRandomAnimal()
{
  const animals=['bird','cat','dog','gator','horse'];
  return animals[Math.floor(Math.random()*animals.length)]
}


function App() {
 
  const[animals,setAnimals]=useState([]);

  const handleClick = () => {

//creating a random array
// take all the existing elements out of our array of animals and put them into the new one
//And then on the very end, we're going to put in a new random animal as well.

   setAnimals([...animals," ",getRandomAnimal()]);
 
  };



const renderedAnimals=animals.map((animals,index)=>
{
  return<AnimalShow type={animals} key ={index} />

});


  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
     <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
}


export default App;























/*
function App()
{
  //const handlClick=()=>{}

  //understanding events and states


  const [count,setCount]=useState=(0);
  const handleClick=()=>{
    setCount(count +1);
  }

/*
function handleClick()
{
  console.log("Button was clicked")
  
}
function onSpanMouseMove () {
  console.log('Mouse was moved!!!')
  <span onMouseMove={onSpanMouseMove}>Move Mouse Over Me!</span>
    
  
}
 
  
  return(

    <div>

      <h1>Animal List: </h1>


      <button onClick={handleClick} >Add Animal</button>
      <div>Number of animals:{count}</div>

    </div>
   
  );
  //console.log(handleClick)
  //console.log(handleClick())
}
*/
/* */
