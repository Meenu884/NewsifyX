import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        NEWSIFY
      </Link>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/category/technology">
          Technology
        </Link>

        <Link to="/category/business">
          Business
        </Link>

        <Link to="/category/sports">
          Sports
        </Link>

      </div>

      <SearchBar />

      <Link
        to="/login"
        className="login-btn"
      >
        Login
      </Link>

    </nav>
  );
}

export default Navbar;