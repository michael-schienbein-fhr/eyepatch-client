import "./Navigation.css";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    return (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-2">
          <NavLink
            className="btn btn-md btn-outline-secondary mx-0"
            to="/rooms/create"
            type="button"
          >Create New Room</NavLink>
        </li>
        <li className="nav-item me-2">
          <NavLink className="nav-link" to="/rooms">
            Rooms
          </NavLink>
        </li>
        <li className="nav-item me-2">
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item me-2">
          <Link className="nav-link" to="/" onClick={logout}>
            Log out {currentUser.first_name || currentUser.username}
          </Link>
        </li>
      </ul>
    );
  }

  function loggedOutNav() {
    return (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-2">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item me-2">
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="Navigation sticky-top navbar navbar-expand-md">
      <Link className="navbar-brand ms-1" to="/">
        Eyepatch
      </Link>
      {currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
}

export default Navigation;
