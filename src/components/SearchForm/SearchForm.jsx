import "./SearchForm.css";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

function SearchForm({ query, setQuery, setCity, onCurrentLocation }) {
  function handleSubmit(event) {
    event.preventDefault();

    if (!query.trim()) return;

    setCity(query.trim());
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <FiSearch className="search-icon" />

        <input
          type="search"
          placeholder="Search for a city..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <button
        type="button"
        className="location-button"
        onClick={onCurrentLocation}
      >
        <HiOutlineLocationMarker />
      </button>
    </form>
  );
}

export default SearchForm;
