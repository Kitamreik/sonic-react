//React Hooks
import React, {useEffect, useState} from 'react'; //import React and state at the top
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//reference files (components)
import CharForm from './components/CharForm.js';
import StatusForm from './components/StatusForm.js';
import UpdateUserForm from './components/UpdateUser.js';
import SearchForm from './components/SearchForm.js';
import Admin from "./components/Admin.js";
import KitDeveloper from "./components/KitDev.js";
import CharList from "./components/CharList.js";
import CombinedCharSet from "./components/CombinedCharSet.js";
import DataInventory from "./components/DataInventory.js";
import TicketList from "./components/TicketList.js";
import UpdateList from "./components/UpdateList.js";


import tickets from "./tickets.json";
import characters from "./characters.json";

console.log(tickets);
console.log(characters);

//Define and assign variables before the function declaration for the App. To display JavaScript in React, you need curly brackets

function App() {


   //const [STATE_NAME, SETTER_FUNCTION] = useState(INITIAL_VALUE);
  //WHERE: The first element is the current value of the state, the second element is a state setter function. Just call it with a new value, and the state will be set and the component will re-render, CAN also initialize the state to null to allow any data type instead of defining it explicitly

  //Initialize the state to a number to allow for a count
  const [count, setCount] = useState(0);

  const handleCounter = () => {
    setCount(count => count + 1) //callback function, correct
    //setCount(count + 1) //bug, just a statement
  }

  //const status = [ "Not started...", "In progress...", "Completed"];

  //Upgrade the array to use the useState hook
  const [statusList, setStatusList] = useState([
    "Not started...", "In progress...", "Completed",
  ]);

  const handleAddStatus = (e) => {
    e.preventDefault();
    const newStatus = e.target.statusList.value; 
    setStatusList((prevState) => [...prevState, newStatus]);
    console.log(newStatus);
  }

  //upgrade to populate characters names using useState
  const [charname, setCharName] = useState([//keep the array empty to let data pass through
  ])

  const handleAddChar = (e) => {
    e.preventDefault();
    const newChar = e.target.charname.value; 
    setCharName((prevState) => [...prevState, newChar]);
    console.log(newChar);
  }

   //Basic: define the state of user
   //const [user, setUser] = useState("CodeSquader");

   //upgrade to populate users names using useState
  const [user, setUser] = useState(["Administrator",]);

  const updateUsername = (e) => {
    e.preventDefault();
    //use the setUser parameter to locate the event target's value
    const newUser = e.target.user.value;
    setUser((prevState) => [...prevState, newUser]);
    console.log("user inside:>> ", newUser);
  };
  
  console.log("user outside:>> ", user);
  
  const searchCallbackHandler = (e) => {
    console.log("e.target.value :>> ", e.target.value);
  };


  //this handler function can move to where your forms are
  /*
    const handleEntryChange = (e) => {
     console.log(e.target.value);
  }; 
  */

  //once you implement useState, this isn't needed:
  /*
    const handleFormSubmit =  (e) => {
   console.log(e.target.name.value);
  };
  */
  


  
  
  //Handler Function Area END

  return (
    <div className="App">
      <KitDeveloper/> 
      <hr />
      <DataInventory />
      <Admin/>
      <CombinedCharSet/>
      <hr />
      <h2>Back End Fetch Retrieval</h2>
      {/* <Fetch/>  */}
      <hr />
      {/* REFACTORED using use state */}
      <CharForm handleAddChar={handleAddChar}/>
      <CharList charname={charname}/>
      <hr />
      <UpdateUserForm updateUsername={updateUsername}/>
      <UpdateList user={user}/>
      {/* user counter w/ useState */}
      <span>
          <p>Detecting manual user count...: {count}</p>
          {/* reference the initial state */}
          <button onClick={handleCounter}>Add a User!</button>
        </span>
      <hr />
      <StatusForm handleAddStatus={handleAddStatus}/>
      <hr />
      <SearchForm searchCallbackHandler={searchCallbackHandler}/>
      <hr />
      <h3>Ticket Status Codes</h3>
      <TicketList statusList={statusList}/>    
      {/* pull from the defined array in the App function */}
     
    </div>
  );
}

// component definition outside of the app
// do not touch below this point
/*
Fetch API Syntax

fetch("url", { options })
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
*/

function Fetch() {
  const [char, setChar] = useState([]); //Gather char from inventory
  const [err, setErr] = useState(""); //set the use state to an empty string to display the err message

  const url = "http://localhost:5050/";
   //useEffect hook
   useEffect(() => {
    //fetch command
    fetch(`${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    //then-catch chaining 
    .then((response) => response.json)
    .then((result) => {
      if (result.statusCode === 200) {
        console.log("Setting future state of Character Inventory")
        setChar(result.data)
      } else {
        throw new Error(result.error.message)
      }
    })
    .catch(error => setErr(error.message))
   }, [])

  (err ? (<p>{err}</p>) : (
    char && char.map((entry) =>
      <div key={entry._id}>
        <a href={`/characters/${entry._id}`}>
        <img src={`/images/${entry.name}`} alt={`${entry.alt}`} />
        </a>

      </div>
    ))
  );


}

export default App;