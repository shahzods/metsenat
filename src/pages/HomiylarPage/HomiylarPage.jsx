import "./HomiylarPage.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import BlueEye from "../../assets/images/blue-eye.svg";
import { Link } from "react-router-dom";

const HomiylarPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="Homiylar-page">
        <div className="container">
          <div className="homiylar-header">
            <p className="homiylar-about">#</p>
            <p className="homiylar-about">f.i.sh.</p>
            <p className="homiylar-about">Tel.Raqami</p>
            <p className="homiylar-about">Homiylik summasi</p>
            <p className="homiylar-about">Sarflangan summa</p>
            <p className="homiylar-about">Sana</p>
            <p className="homiylar-about">Holati</p>
            <p className="homiylar-about">Amallar</p>
          </div>

          <div className="homiylar-main">
            <p className="homiylar-p">1</p>
            <p className="homiylar-p">Alimov Abror Xabibullayevich</p>
            <p className="homiylar-p">+99899 999-99-99</p>
            <p className="homiylar-p">
              30 000 000 <span className="homiylar-span">uzs</span>
            </p>
            <p className="homiylar-p">
              0 <span className="homiylar-span">uzs</span>
            </p>
            <p className="homiylar-p">15.01.2021</p>
            <p className="homiylar-p">Yangi</p>
            <Link to="/singlepage">
              <img src={BlueEye} width="24" height="24" alt="homiylar" />
            </Link>
          </div>

          <div className="homiylar-main">
            <p className="homiylar-p">1</p>
            <p className="homiylar-p">Alimov Abror Xabibullayevich</p>
            <p className="homiylar-p">+99899 999-99-99</p>
            <p className="homiylar-p">
              30 000 000 <span className="homiylar-span">uzs</span>
            </p>
            <p className="homiylar-p">
              0 <span className="homiylar-span">uzs</span>
            </p>
            <p className="homiylar-p">15.01.2021</p>
            <p className="homiylar-p">Yangi</p>
            <Link to="/singlepage">
              <img src={BlueEye} width="24" height="24" alt="homiylar" />
            </Link>
          </div>

          <div className="homiylar-main">
            <p className="homiylar-p">1</p>
            <p className="homiylar-p">Alimov Abror Xabibullayevich</p>
            <p className="homiylar-p">+99899 999-99-99</p>
            <p className="homiylar-p">
              30 000 000 <span className="homiylar-span">uzs</span>
            </p>
            <p className="homiylar-p">
              0 <span className="homiylar-span">uzs</span>
            </p>
            <p className="homiylar-p">15.01.2021</p>
            <p className="homiylar-p">Yangi</p>
            <Link to="/singlepage">
              <img src={BlueEye} width="24" height="24" alt="homiylar" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomiylarPage;
