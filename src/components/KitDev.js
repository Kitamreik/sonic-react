//React Hooks
import React, {useState} from 'react'; //import React and state at the top
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

export default KitDeveloper;