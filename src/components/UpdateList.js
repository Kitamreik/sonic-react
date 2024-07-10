//React Hooks
import React, {useState} from 'react'; //import React and state at the top
//Basic: define the state of user
//const [user, setUser] = useState("CodeSquader");

//refactoring props out of the functions using destructuring
function UpdateList({user}) {

  //upgrade to populate users names using useState
  const [admin, setAdmin] = useState(["Administrator",]);
    //console.log(props);
    return(
      <div>
        <h4>New Users Loading...</h4>
        {admin.map((admin) => (
        <ul>
          <li>{admin}</li>
        </ul>
        ))}
      </div>
    )
   }

export default UpdateList;