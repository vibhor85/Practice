import "./App.scss";
import Header from "./UI/Header";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

import { useState } from "react";

function App() {
  const [auth, setAuth] = useState();
  return (
    <div className="App">
      <Header />
      {!auth ? <Login /> : <Profile />}
    </div>
  );
}

export default App;
