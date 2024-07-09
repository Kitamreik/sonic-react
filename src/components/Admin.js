// ternary operator
function Admin() {
    const administrator = true;
    return(
      <div>
        {administrator ? ("Hello Admin") : ("Please log in...") }
      </div>
    )
  }

export default Admin;