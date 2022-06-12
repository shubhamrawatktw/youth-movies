import React from "react";
import { useGlobalContext } from "./context";

function SearchForm() {
  const { query, setQuery } = useGlobalContext();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h3>search movies</h3>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchForm;
