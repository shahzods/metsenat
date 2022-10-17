import "./AdminPage.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Summa from "../../components/Summa/Summa";
import Chart from "../../components/Chart/Chart";
import BlueMoney from "../../assets/images/blue-money.svg";
import YellowMoney from "../../assets/images/yellow-money.svg";
import OrangeMoney from "../../assets/images/orange-money.svg";

const AdminPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="Admin-page">
        <div className="container">
          <div className="admin-page">
            <div className="inner-admin">
              <Summa
                img={BlueMoney}
                text={"Jami to‘langan summa"}
                num={"1 684 325 000"}
                span={"uzs"}
              />
              <Summa
                img={YellowMoney}
                text={"Jami so‘ralgan summa"}
                num={"14 098 530 000"}
                span={"uzs"}
              />
              <Summa
                img={OrangeMoney}
                text={"To‘lanishi kerak summa"}
                num={"12 414 205 000"}
                span={"uzs"}
              />
            </div>
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
