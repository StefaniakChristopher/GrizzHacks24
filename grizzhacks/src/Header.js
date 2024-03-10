import "./App.css";

function header({ heroSection, setHeroSection }) {
  return (
    <header>
      <div>
        <h1>GrizzHacks 24</h1>
      </div>
      <div>
        <nav>
          <ul>
            <a>
              <li onClick={() => setHeroSection("/bioInformatics.png")}>
                Bio Informatics
              </li>
            </a>
            <a>
              <li onClick={() => setHeroSection("/cyberSecurity.png")}>
                Cyber Security
              </li>
            </a>
            <a>
              <li
                onClick={() => setHeroSection("/computationalIntelligence.png")}
              >
                Computational Intelligence
              </li>
            </a>
            <a>
              <li onClick={() => setHeroSection("/gameDevelopment.png")}>
                Game Development
              </li>
            </a>
            <a>
              <li onClick={() => setHeroSection("/mobileApplications.png")}>
                Mobile Applications
              </li>
            </a>
            <a>
              <li onClick={() => setHeroSection("/systemsAdmin.png")}>
                Systems Admin
              </li>
            </a>
            <a>
              <li onClick={() => setHeroSection("/webDevelopment.png")}>
                Web Development
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default header;
