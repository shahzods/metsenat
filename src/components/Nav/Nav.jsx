import "./Nav.css";
import Logo from "../../assets/images/logo.svg";
import Enter from "../../assets/images/enter.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
      <div className="container">
        <div className="nav">
          <Link className="nav-logo" to="/">
            <img src={Logo} width="295" height="31" alt="metsenat" />
          </Link>

          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link">Asosoiy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Grantlar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Soliq imtiyozlari</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-login" to="/loginpage">
                <img src={Enter} width="24" height="24" alt="enter" />
                Kirish
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-register">Ro‘yxatdan o’tish</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
