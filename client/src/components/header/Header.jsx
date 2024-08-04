import { Link } from "react-router-dom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
  const { username } = useContext(AuthContext);

  console.log(username);

  return (
    <>
      <nav className="header">
        <Link to="/" className="logo">
          <FitnessCenterIcon fontSize="large" />
        </Link>

        <ul className="main-nav">
          <li className="main-nav-li">
            <Link to="/" className="main-nav-link">
              Home
            </Link>
          </li>
          <li className="main-nav-li">
            <Link to="/catalog" className="main-nav-link">
              Catalog
            </Link>
          </li>
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
