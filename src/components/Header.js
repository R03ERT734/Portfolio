import "../Styles/App.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <a href="https://google.com" className="link">
        Projects
      </a>
      <a href="https://google.com" className="link">
        Contact
      </a>
    </div>
  );
};

export default Header;