import { useState } from "react";

function SearchBar() {

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    console.log("Searching for:", search);
  };

  return (
    <form
      className="search-bar"
      onSubmit={handleSearch}
    >

      <input
        type="text"
        placeholder="Search news..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit">
        🔍
      </button>

    </form>
  );
}

export default SearchBar;