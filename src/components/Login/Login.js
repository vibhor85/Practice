import "./Login.scss";

import { useRef, useState } from "react";

const Login = () => {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPassValid, setIsPassValid] = useState(false);

  const onSubmitHandelar = (event) => {
    event.preventDefault();
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    if (email.trim() === "") {
      setIsEmailValid(true);
      return;
    }
    if (password === "") {
      setIsPassValid(true);
      return;
    }
    event.target.reset();
    console.log(email, password);
  };

  const invalidEmail = isEmailValid
    ? "form-control is-invalid"
    : "form-control";
  const invalidPass = isPassValid ? "form-control is-invalid" : "form-control";

  return (
    <form className="form" onSubmit={onSubmitHandelar}>
      <div className="form__div">
        <label className="form-label">Login</label>
        <input
          className={invalidEmail}
          type="email"
          placeholder="Enter Email"
          ref={inputEmail}
        />
      </div>
      <div className="form__div">
        <label className="form-label">Password</label>
        <input
          className={invalidPass}
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
