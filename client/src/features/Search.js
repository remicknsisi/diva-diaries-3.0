import React from "react";

function Search({ search, setSearch }) {

  return (
    <div className="filter">
      <label className="heading">Search Users: </label>
      <input className="form-input" type="text" placeholder="E.g. Adore Delano" value={search} onChange={e => setSearch(e.target.value)}>
      </input>
    </div>
  );
}

export default Search;