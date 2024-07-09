
function CharList({charname}) {
    //console.log(props);
    return(
      <div>
        <h4>New Characters Loading...</h4>
        {charname.map((charname) => (
        <ul>
          <li>{charname}</li>
        </ul>
        ))}
      </div>
    )
   }

export default CharList;