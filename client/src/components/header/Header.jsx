import { Link } from "react-router-dom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useAuthContext } from "../../context/AuthContext";
import { userService } from "../../apiAndServices/userService";

export default function Header() {
  const { username, changeAuthState, isAuthenticated } = useAuthContext();

  const logoutHandler = () => {
    try {
      userService.logout();
      changeAuthState({
        isAuthenticated: false,
        username: "",
        _id: "",
        accessToken: "",
        email: "",
        changeAuthState,
      }); // Clear user data from the auth context
      localStorage.removeItem("auth");
    } catch (error) {
      console.log("Error logout");
      console.log(error);
    }
  };

  return (
    <>
      <nav className="header">
        <Link to="/" className="logo">
          <FitnessCenterIcon fontSize="large" />
        </Link>

        <ul className="main-nav">
          <li className="main-nav-li">
            <Link to="/catalog" className="main-nav-link">
              Catalog
            </Link>
          </li>
          {!isAuthenticated ? (
            <>
              <li className="main-nav-li">
                <Link to="/login" className="main-nav-link">
                  Login
                </Link>
              </li>
              <li className="main-nav-li">
                <Link to="/register" className="main-nav-link">
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="main-nav-li">
                <Link to="/create" className="main-nav-link">
                  Create
                </Link>
              </li>
              <li className="main-nav-li">
                <Link to="/" className="main-nav-link" onClick={logoutHandler}>
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>

        <p className="username">
          <Link to="/" className="username-link">
            {username ? username : "User"}
          </Link>
        </p>
      </nav>
    </>
  );
}
