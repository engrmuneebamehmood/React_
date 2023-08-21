import { useState } from "react";
function SearchBar({onSubmit})
{


const[term,setTerm]=useState('cars');//set default value


  const handleFormSubmit=(event)=>
  {
    event.preventDefault();
    onSubmit('cars');

  };
   
  const handleChange=(event)=>
  {
    setTerm(event.target.value.replace(/[a-z]/,''));// it will only allow to enter numbers

  };
  

  return (
      <div>
        <form onSubmit={handleFormSubmit}>
          Please confirm your search:{term}
          <input value ={term} onChange={handleChange} />
          {term.length<3 && 'Term must be longer'} 
       
        </form>
      
        
      </div>
    );
  }
  
  export default SearchBar;
