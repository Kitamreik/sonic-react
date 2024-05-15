const handleEntryChange = (e) => {
    console.log(e.target.value);
};

const handleFormSubmit =  (e) => {
    console.log(e.target.name.value);
};

//add props
function NewEntryForm(props) {
    console.log(props);
    
    return(
        <form action="/" onSubmit={props.handleFormSubmit}>
            <label htmlFor="name">
            <input type="text" name="name" id="name" onChange={props.handleEntryChange}/>
            <button type="submit">Send to Database...</button>
            </label>
        </form>
    )
 }

//A file can have no more than one default export
export default NewEntryForm;