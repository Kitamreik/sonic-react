//use props when you pull from a defined array
function TicketList(props) {
    console.log(props);
    return(
      <div>
        {/* add props before the json target */}
        {props.tickets.map((ticket) => (
        <ul>
          <li>{ticket}</li>
        </ul>
        ))}
      </div>
    )
  }

  //A file can have no more than one default export
export default TicketList;