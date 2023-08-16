import "./Login.scss";

import { useRef } from "react";

const Login = () => {
  const inputEmail = useRef();
  const inputPassword = useRef();

    
    
  return (
    <form className="form">
      <div className="form__div">
        <label className="form-label">Login</label>
        <input
          className="form-control"
          type="email"
          placeholder="Enter Email"
          ref={inputEmail}
        />
      </div>
      <div className="form__div">
        <label className="form-label">Password</label>
        <input
          className="form-control"
          type="password"
          placeholder="Enter Password"
          ref={inputPassword}
        />
      </div>
      <button type="submit">LogIn</button>
    </form>
  );
};

export default Login;
