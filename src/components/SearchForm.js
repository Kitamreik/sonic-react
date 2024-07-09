import React, { useState } from "react";

function SearchForm({ searchCallbackHandler }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);

    searchCallbackHandler(e);
  };

  return (
    <div className="Search">
      <label htmlFor="searchTerm">Search: </label>
      <input name="searchTerm" id="searchTerm" value={searchTerm} type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
}

export default SearchForm;
