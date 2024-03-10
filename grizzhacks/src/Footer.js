import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./App.css";

function Footer({ heroSection, setHeroSection }) {
  return (
    <div>
      <footer>
        <div>
          <h3>GrizzHacks</h3>
        </div>
        <div>
          <nav>
            <ul>
              <a>
                <li>Bio Informatics</li>
              </a>
              <a>
                <li>Cyber Security</li>
              </a>
              <a>
                <li>Computational Intelligence</li>
              </a>
              <a>
                <li>Game Development</li>
              </a>
              <a>
                <li>Mobile Applications</li>
              </a>
              <a>
                <li>Systems Admin</li>
              </a>
              <a>
                <li>Web Development</li>
              </a>
            </ul>
          </nav>
        </div>
        <div>
          <a href="#">
            <span className="d text-1xl">
              <FaYoutube />
            </span>
          </a>
          <a href="#">
            <span className="d text-1xl">
              <FaFacebookF />
            </span>
          </a>
          <a href="#">
            <span className="d text-1xl">
              <FaTwitter />
            </span>
          </a>
          <a href="#">
            <span className="d text-1xl">
              <FaInstagram />
            </span>
          </a>
          <a href="#">
            <span className="d text-1xl">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
