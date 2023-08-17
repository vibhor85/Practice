import AuthContext from "../../context/auth";
import "./Login.scss";

import { useContext, useRef, useState } from "react";

const Login = ({ login }) => {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPassValid, setIsPassValid] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPassTouched, setIsPassTouched] = useState(false);
  const ctx = useContext(AuthContext);

  const onBlurEmailHandler = () => {
    setIsEmailTouched(true);
    const email = inputEmail.current.value;
    if (!email.includes("@")) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
  };
  const onBlurPassHandler = () => {
    setIsPassTouched(true);
    const pass = inputPassword.current.value;
    if (pass.length < 8) {
      setIsPassValid(false);
    } else {
      setIsPassValid(true);
    }
  };

  const onSubmitHandelar = (event) => {
    event.preventDefault();
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    if (email.trim() === "") {
      setIsEmailValid(false);
      return;
    }
    if (password === "") {
      setIsPassValid(false);
      return;
    }
    ctx.login();
    event.target.reset();
  };

  const invalidEmail =
    isEmailTouched && !isEmailValid
      ? "form-control  is-invalid"
      : "form-control";
  const invalidPass =
    isPassTouched && !isPassValid ? "form-control  is-invalid" : "form-control";

  return (
    <form className="form" onSubmit={onSubmitHandelar}>
      <div className="form__div">
        <label className="form-label">Login</label>
        <input
          className={invalidEmail}
          type="email"
          placeholder="Enter Email"
          onBlur={onBlurEmailHandler}
          ref={inputEmail}
        />
      </div>
      <div className="form__div">
        <label className="form-label">Password</label>
        <input
          className={invalidPass}
          type="password"
          placeholder="Enter Password"
          onBlur={onBlurPassHandler}
          ref={inputPassword}
        />
      </div>
      <button type="submit">LogIn</button>
    </form>
  );
};

export default Login;
