
//it is just a project , named app
//WE HAVE RESUED OUR INTERN COMPONENT HERE, SO IF WE USE ONLY THE NAME OF APP FUNCTION IN INDEX.JS, BOTH WILL WORK

import logo from './logo.svg';
import './App.css';
import Intern from  './Intern';
import Classcomponent from './Classcomponent';
import Mystate from './Mystate';

function App() {
  let name="Muneeba Mehmood"
  let skill="React js"
  return (
    <div className="App">
      <h1> Hello, my name is {name} and my skill is {skill}</h1>
      <h2> The time is : {new Date().toLocaleTimeString()}</h2>

      <Intern />
    </div>
  );
}

export default App;
