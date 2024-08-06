import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../../apiAndServices/userService";
import { useAuthContext } from "../../context/AuthContext";

export default function Register() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const navigate = useNavigate();
  const { changeAuthState } = useAuthContext();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { username, email, accessToken, _id } = await userService.register(
        formValues
      );

      changeAuthState({
        userId: _id,
        email,
        accessToken,
        username,
        isAuthenticated: true,
      });
      navigate("/");
    } catch (error) {
      console.log("Error Register");
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
      <h1 className="home-title">Sign Up</h1>

      <form onSubmit={submitHandler} className="login-form">
        <div className="username-input">
          <label htmlFor="username">
            Username <span className="required">*</span>
          </label>
          <input
            type="username"
            id="username"
            name="username"
            placeholder="username"
            value={formValues.username}
            onChange={onChangeHandler}
          />
        </div>
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
        <div className="repeat-password-input">
          <label htmlFor="rePassword">
            Repeat Password <span className="required">*</span>
          </label>
          <input
            type="rePassword"
            id="rePassword"
            name="rePassword"
            placeholder="Repeat Password"
            value={formValues.rePassword}
            onChange={onChangeHandler}
          />
        </div>

        <div className="submit-button">
          <button type="submit">Sing Up</button>
        </div>
      </form>
    </>
  );
}
