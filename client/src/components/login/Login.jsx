import { useState } from "react";

export default function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit Handler triggered");
  };

  const onChangeHandler = (e) => {
    setFormValues((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <h1 className="home-title">Sign In</h1>

      <form onSubmit={submitHandler} className="login-form">
        <div className="email-input">
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Example@example.com"
            value={formValues.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="password-input">
          <label htmlFor="password">
            Password <span className="required">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={onChangeHandler}
          />
        </div>

        <div className="submit-button">
          <button type="submit">Sing In</button>
        </div>
      </form>
    </>
  );
}
