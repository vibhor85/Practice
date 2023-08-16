import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
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
      <button>Log Out</button>
    </header>
  );
};

export default Header;
