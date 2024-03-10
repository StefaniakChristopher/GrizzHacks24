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
          <h3>GrizzCS</h3>
        </div>
        <div>
          <nav>
            <ul>
              <a href="#">
                <li onClick={() => setHeroSection("/bioInformatics.png")}>
                  Bio Informatics
                </li>
              </a>
              <a href="#">
                <li onClick={() => setHeroSection("/cyberSecurity.png")}>
                  Cyber Security
                </li>
              </a>
              <a href="#">
                <li
                  onClick={() =>
                    setHeroSection("/computationalIntelligence.png")
                  }
                >
                  Computational Intelligence
                </li>
              </a>
              <a href="#">
                <li onClick={() => setHeroSection("/gameDevelopment.png")}>
                  Game Development
                </li>
              </a>
              <a href="#">
                <li onClick={() => setHeroSection("/mobileApplications.png")}>
                  Mobile Applications
                </li>
              </a>
              <a href="#">
                <li onClick={() => setHeroSection("/systemsAdmin.png")}>
                  Systems Admin
                </li>
              </a>
              <a href="#">
                <li onClick={() => setHeroSection("/webDevelopment.png")}>
                  Web Development
                </li>
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
