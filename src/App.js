import "./App.scss";
import Header from "./UI/Header";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Profile />
    </div>
  );
}

export default App;
