 const handleEntryChange = (e) => {
    console.log(e.target.value);
 };

function StatusForm(props) {
    console.log(props);
    return(
        <div>
          <h3>Status Form</h3>
          <form onSubmit={props.handleAddStatus}>
            <label htmlFor="statusList"> Add New Status:</label>
            <input type="text" name='statusList' id='statusList' onChange={handleEntryChange} />
            <button type='submit'>Add to Status List</button>
          </form>      
        </div>
    )
}

//A file can have no more than one default export
export default StatusForm;