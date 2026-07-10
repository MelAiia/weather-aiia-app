import "./SearchForm.css";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-input-wrapper">
        <FiSearch className="search-icon" />

        <input type="search" placeholder="Search for a city..." />
      </div>

      <button type="button" className="location-button">
        <HiOutlineLocationMarker />
      </button>
    </form>
  );
}

export default SearchForm;
