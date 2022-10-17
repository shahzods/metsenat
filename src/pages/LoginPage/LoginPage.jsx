import "./LoginPage.css";
import Logo from "../../assets/images/logo.svg";
import Isrobot from "../../assets/images/isrobot.svg";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-inner">
        <Link className="login-logo" to="/">
          <img src={Logo} width="315" height="33" alt="" />
        </Link>

        <div className="login-box">
          <h2 className="login-h">Kirish</h2>

          <form
            className="login-form"
            target="_blank"
            action="https://echo.htmlacademy.ru"
            method="post"
          >
            <label className="label" htmlFor="flogin">
              Login
            </label>
            <input
              className="login-input"
              type="text"
              id="fname"
              name="fname"
              placeholder="adm8904"
            />

            <label className="label" htmlFor="fparol">
              Parol
            </label>
            <input
              className="login-input"
              type="password"
              id="fparol"
              name="fparol"
              placeholder="••••••••••"
            />

            <div className="login-checkbox">
              <div className="check-inner">
                <input
                  className="login-check"
                  type="checkbox"
                  id="notrobot"
                  name="notrobot"
                  value="notrobot"
                />
                <label className="login-text" htmlFor="notrobot">
                  I’m not a robot
                </label>
              </div>
              <img src={Isrobot} width="58" height="56" alt="isrobot" />
            </div>

            <Link to="/adminpage">
              <input className="login-submit" type="submit" value="Kirish" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
