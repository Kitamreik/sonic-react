//React Hooks
import React, {useState} from 'react'; //import React and state at the top
const handleEntryChange = (e) => {
    console.log(e.target.value);
};

function UpdateUserForm(props) {
      //Initialize the state to a number to allow for a count
  const [count, setCount] = useState(0);

  const handleCounter = () => {
    setCount(count => count + 1) //callback function, correct
    //setCount(count + 1) //bug, just a statement
  }
    console.log(props);
    return(
        <div>
        <h3>Update a User</h3>
        <form onSubmit={props.updateUsername}>
            <label htmlFor="user">
            <input type="text" name="user" id="user" onChange={handleEntryChange}/>
            </label>
            <button type="submit">Send to Database...</button>
        </form>
         {/* user counter w/ useState */}
      <span>
          <p>Detecting manual user count...: {count}</p>
          {/* reference the initial state */}
          <button onClick={handleCounter}>Add a User!</button>
        </span>
      </div>
    )
}

//A file can have no more than one default export
export default UpdateUserForm;