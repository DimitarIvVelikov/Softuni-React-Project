import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="footer">
          <p>© 2024 React Website. All rights reserved.</p>
        </div>
        <div className="social-media">
          <Link className="link">
            <FacebookIcon fontSize="large" />
          </Link>
          <Link className="link">
            <InstagramIcon fontSize="large" />
          </Link>
          <Link className="link">
            <XIcon fontSize="large" />
          </Link>
          {/* <a href="https://www.facebook.com/yourpage" target="_blank">
            <img className="logo" src="facebook.avif" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com/yourpage" target="_blank">
            <img className="logo" src="twitter.avif" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/yourpage" target="_blank">
            <img className="logo" src="instagram.avif" alt="Instagram" />
          </a> */}
        </div>
      </footer>
    </>
  );
}
