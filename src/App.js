//React Hooks
import React, {useState} from 'react'; //import React and state at the top
//remove imports, starter template
import SonicPicture from './img/sonic.png'; // importing the picture directly

//reference data.js for the Sonic Data and summon the parameters from the file
import {hello, sonic, one, two, sonicData} from "./data.js";

//reference files (components)
import CharForm from './CharForm.js';
import StatusForm from './StatusForm.js';
import UpdateUserForm from './UpdateUser.js';

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
      <Sonic />  {/* component instantiation- move all the code below */}
      <hr />
      {/* Basic: the form can now pass the handler functions */}
      {/* 
      <NewEntryForm
        handleEntryChange={handleEntryChange}
        handleFormSubmit={handleFormSubmit}
      />
      */}
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
      <h3>Ticket Status Codes</h3>
      <TicketList statusList={statusList}/>    
      {/* pull from the defined array in the App function */}
     
    </div>
  );
}

// component definition outside of the app
// do not touch below this point
function KitDeveloper() {
  //initialize the state to an object
  const [developer, setDeveloper] = useState({
   name: "Kit Fenrir Amreik (they/she)",
   location: "Denver, CO",
   github: "https://github.com/Kitamreik",
   linkedIn: "https://www.linkedin.com/in/kit-amreik/",
   email: "kitdamreik@gmail.com",
   website: "https://tj-practitioner-directory.onrender.com/",
   portfolio: "https://kit-fenrir-amreik-portfolio.onrender.com/",
   gradYear: 2022,
   tfYear: 2023,
   teachingYear: 2
 })

 const handleAddTeachYear = () => {
   setDeveloper((prevState) => {
     //make a copy of the prevState and change what to you need to
     const newTeach = {...prevState, teachingYear: developer.teachingYear + 1};
     return newTeach;
   })
 }

 const handleNextYear = () => {
   setDeveloper((prevState) => {
     //make a copy of the prevState and change what to you need to
     const newYear = {...prevState, tfYear: developer.tfYear + 1};
     return newYear;
   })
 }

 return(
   <div>
     <span>  {/* must be first */}
       <h1>Current Developer Information</h1>
       <p>The current developer working on this React interface is {developer.name}, who resides in {developer.location}, and can be reached at <a href="mailto:kitdamreik#gmail.com">{developer.email}</a> . Their website links and information can be found below:</p>
       <ul>
         <li>Github: <a href="https://github.com/Kitamreik">{developer.github}</a></li>
         <li>LinkedIn: <a href="https://www.linkedin.com/in/kit-amreik/">{developer.linkedIn}</a></li>
         <li>Website: <a href="https://tj-practitioner-directory.onrender.com/">{developer.website}</a></li>
         <li>Portfolio: <a href="https://kit-fenrir-amreik-portfolio.onrender.com/">{developer.portfolio}</a></li>
       </ul>
       <p>Kit has also been a CodeSquad bootcamp grad since {developer.gradYear} and is currently on year <button onClick={handleAddTeachYear}>{developer.teachingYear}</button>of teaching as of <button onClick={handleNextYear}>{developer.tfYear}</button>.</p>
     </span>
   </div>
 )
}

function UpdateList(props) {
  console.log(props);
  return(
    <div>
      <h4>New Users Loading...</h4>
      {props.user.map((user) => (
      <ul>
        <li>{user}</li>
      </ul>
      ))}
    </div>
  )
 }

function CharList(props) {
 console.log(props);
 return(
   <div>
     <h4>New Characters Loading...</h4>
     {props.charname.map((charname) => (
     <ul>
       <li>{charname}</li>
     </ul>
     ))}
   </div>
 )
}

function TicketList(props) {
  console.log(props);
  return(
    <div> 
      <h4>Default Values</h4>  
      {/* add props before the json target */}
      {/* upgrade from status to statusList */}
      {props.statusList.map((statusList) => (
      <ul>
        {/* <li>{ticket}</li> */}
        <li>{statusList}</li>
      </ul>
      ))}
    </div>
  )
}

function Sonic() {
  return (
    <div>
       <h1>
        {hello}, {sonic}
      </h1>
      <h2> 
        {/* generate a code key 3-122 */}
        code key:
        {one + two}
        {one - two}
        {one * two}
        {two / one}
      </h2>
      <h3>
        {sonicData.name} lives in {sonicData.area}
      </h3>
      <ul>
          {sonicData.activities.map(
            (activity) => (
              <li>{activity}</li>
          ))}

        {/* use the map function to iterate over arrays */}
        {/* 
         <li>
          {sonicData.activities[0]}  
        </li>
        <li>
          {sonicData.activities[1]}  
        </li>
        <li>
          {sonicData.activities[2]}  
        </li>
        */}
      </ul>
      <figure>
        <figcaption>
          This is an image of Sonic:
        </figcaption>
        {/* <img src={require("./img/sonic.png")} alt={"Sonic the Hedgehog"} />  */}
        {/* manually render an image without a component. 
        
        You attempted to import ../img/sonic.png which falls outside of the project src/ directory. Relative imports outside of src/ are not supported. 
        
        Use require to render an image dynamically instead of hard-coding the file path. 
        
        Doc: https://medium.com/@carlie.anglemire/requiring-images-in-react-9bcf6a8c2cb
        */}
         <br />
         {/* <img src={sonicData.image} alt={sonicData.alt} /> */}
         {/* putting the src and alt into the character object */}
        <img src={SonicPicture} alt={sonicData.alt} />
        {/* importing the picture using a component */}

      </figure>
    </div>
  )
}

export default App;