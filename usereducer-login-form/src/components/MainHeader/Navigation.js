import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const contx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {contx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {contx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {contx.isLoggedIn && (
          <li>
            <button onClick={contx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
