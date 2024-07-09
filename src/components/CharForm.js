const handleEntryChange = (e) => {
    console.log(e.target.value);
};

//add props
function CharForm(props) {
    console.log(props);
    
    return(
        <div>
            <h3>Enter a Character</h3>
            <form onSubmit={props.handleAddChar}>
            <label htmlFor="charname">
            <input type="text" name="charname" id="charname" onChange={handleEntryChange}/>
            <button type="submit">Send to Database...</button>
            </label>
        </form>
        </div>
    )
 }

//A file can have no more than one default export
export default CharForm;