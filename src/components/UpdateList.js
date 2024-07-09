//refactoring props out of the functions using destructuring
function UpdateList({user}) {
    //console.log(props);
    return(
      <div>
        <h4>New Users Loading...</h4>
        {user.map((user) => (
        <ul>
          <li>{user}</li>
        </ul>
        ))}
      </div>
    )
   }

export default UpdateList;