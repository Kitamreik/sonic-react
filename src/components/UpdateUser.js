const handleEntryChange = (e) => {
    console.log(e.target.value);
};

function UpdateUserForm(props) {
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
      </div>
    )
}

//A file can have no more than one default export
export default UpdateUserForm;