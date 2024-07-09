function TicketList({statusList}) {
  //console.log(props);
  return(
    <div> 
      <h4>Default Values</h4>  
      {/* add props before the json target */}
      {/* upgrade from status to statusList */}
      {statusList.map((statusList) => (
      <ul>
        {/* <li>{ticket}</li> */}
        <li>{statusList}</li>
      </ul>
      ))}
    </div>
  )
}


//A file can have no more than one default export
export default TicketList;