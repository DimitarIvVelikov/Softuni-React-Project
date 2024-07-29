import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <nav className="header">
        <img src="logo.jpg" alt="#" className={styles.logo} />

        <ul className="main-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
