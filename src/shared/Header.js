import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Emerald from '../img/emerald.webp'

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch(`http://localhost:5050/logout`)
      .then((response) => response.json())
      .then((result) => {
        console.log("result :>> ", result);
        localStorage.removeItem("user");
        setUser({});
        navigate("/");
      })
      .catch((error) => {
        console.log("error :>> ", error);
        navigate("/admin");
      });
  };
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-logo-container">
        <img
          className="nav-logo"
          src={Emerald}
          alt="logo" width={"200 px"}
        />
      </Link>
      <ul className="navbar" id="nav-menu">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        {user.username ? (
          <>
            <li>
              <Link to="/admin">ADMIN</Link>
            </li>
            <li>
              <button onClick={handleLogout}>
              LOGOUT
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;