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
              <li onClick={() => setHeroSection("bioInformatics")}>
                Bio Informatics
              </li>
            </a>
            <a>
              <li onClick={() => setHeroSection("cyberSecurity")}>
                Cyber Security
              </li>
            </a>
            <a>
              <li onClick={() => setHeroSection("computationalIntelligence")}>
                Computational Intelligence
              </li>
            </a>
            <a>
              <li onClick={() => setHeroSection("gameDevelopment")}>
                Game Development
              </li>
            </a>
            <a>
              <li onClick={() => setHeroSection("mobileApplications")}>
                Mobile Applications
              </li>
            </a>
            <a>
              <li onClick={() => setHeroSection("systemsAdmin")}>
                Systems Admin
              </li>
            </a>
            <a>
              <li onClick={() => setHeroSection("webDevelopment")}>
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
