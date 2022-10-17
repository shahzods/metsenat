import "./SingleTop.css";
import Chiqish from "../../assets/images/chiqish.svg";
import { Link } from "react-router-dom";

const SingleTop = () => {
  return (
    <div className="SingleTop">
      <div className="container">
        <div className="single-top">
          <Link to="/homiylarpage">
            <img src={Chiqish} width="28" height="28" alt="chiqish" />
          </Link>
          <h6 className="singletop-name">Ishmuhammedov Aziz Ishqobilovich</h6>
          <p className="singletop-p">Tasdiqlang</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTop;
