import "./Home.css";
import Nav from "../../components/Nav/Nav";
import Left from "../../components/Left/Left";
import Right from "../../components/Right/Right";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="home">
        <Left />
        <Right />
      </div>
    </>
  );
};

export default Home;
