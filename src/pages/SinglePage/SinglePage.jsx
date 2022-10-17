import "./SinglePage.css";
import Header from "../../components/Header/Header";
import SingleTop from "../../components/SingleTop/SingleTop";
import NextMix from "../../assets/images/next-mix.png";

const SinglePage = () => {
  return (
    <>
      <Header />
      <SingleTop />
      <div className="Single-page">
        <div className="container">
          <div className="single-page">
            <br className="single-br" />
            <div className="single-box">single</div>
            <img className="next-mix" src={NextMix} alt="mix" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
