import { useContext, useState } from "react";
import { userService } from "../../apiAndServices/userService";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const { changeAuthState } = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const login = await userService.login(formValues);
      const { username, email, accessToken, _id } = login;
      changeAuthState({
        username,
        email,
        accessToken,
        _id,
        isAuthenticated: true,
      });
    } catch (error) {
      console.log("Error Login");
    }
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
