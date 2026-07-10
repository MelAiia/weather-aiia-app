import "./Header.css";
import { WiCloud } from "react-icons/wi";
import { FiSettings } from "react-icons/fi";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <WiCloud className="logo-icon" />
        <span>Skye</span>
      </div>

      <button className="settings-button" aria-label="Settings">
        <FiSettings />
      </button>
    </header>
  );
}

export default Header;
