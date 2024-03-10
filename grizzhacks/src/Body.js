import "./App.css";
import Default from "./Default";
import Tree from "./Tree";

function Body({ heroSection, setHeroSection }) {
  const renderComponent = () => {
    if (heroSection === "default") {
      return <Default />;
    } else {
      return <Tree />;
    }
  };

  return <>{renderComponent()}</>;
}

export default Body;
