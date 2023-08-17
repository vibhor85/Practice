import "./App.scss";
import Header from "./UI/Header";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import AuthContext from "./context/auth";

import { useState, useEffect } from "react";

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Auth") === "1") setAuth(true);
  }, []);

  const loginHandler = () => {
    localStorage.setItem("Auth", "1");
    setAuth(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("Auth");
    setAuth(false);
  };

  return (
    <div className="App">
      <AuthContext.Provider
        value={{ auth: auth, login: loginHandler, logout: logoutHandler }}
      >
        <Header />
        {!auth && <Login />}
        {auth && <Profile />}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
