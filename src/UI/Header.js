import "./Header.scss";

import AuthContext from "../context/auth";
import { useContext } from "react";

const Header = ({ auth }) => {
  const ctx = useContext(AuthContext);

  return (
    <header className="Header">
      {ctx.auth && (
        <nav className="nav">
          <ul>
            <li>
              <a href="/">Profile</a>
            </li>
            <li>
              <a href="/">Settings</a>
            </li>
          </ul>
        </nav>
      )}
      {ctx.auth && <button onClick={() => ctx.logout()}>Log Out</button>}
    </header>
  );
};

export default Header;
