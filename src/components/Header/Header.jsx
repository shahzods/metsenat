import "./Header.css";
import NextLogo from "../../assets/images/next-logo.svg";
import AdminIcon from "../../assets/images/admin-logo.svg";
import Exit from "../../assets/images/exit.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="header">
          <Link to="/adminpage">
            <img src={NextLogo} width="173" height="24" alt="logo" />
          </Link>

          <div className="inner-header">
            <div className="admin">
              <p className="admin-name">Shohrux</p>

              <div className="admin-icon">
                <img
                  className="admin-img"
                  src={AdminIcon}
                  width="22"
                  height="24"
                  alt="admin"
                />
              </div>
            </div>

            <Link to="/">
              <img src={Exit} width="32" height="32" alt="exit" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
