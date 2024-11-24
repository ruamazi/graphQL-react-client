import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar  mb-4">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img src="/logo.svg" />
          <div className="logo-text">M.PROJECTS APP</div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
