import "./Right.css";
import President from "../../assets/images/president.jpg";
import Mix from "../../assets/images/mix.png";

const Right = () => {
  return (
    <div className="right">
      <h3 className="right-text">
        Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi. Ayni
        oʻsha paytda ularni oʻzlari oʻrgangan muhitdan ajratib qoʻymaslik kerak.
      </h3>

      <div className="president">
        <img
          className="president-img"
          src={President}
          width="55"
          height="55"
          alt="president"
        />

        <div>
          <h4 className="president-name">Shavkat Mirziyoyev</h4>
          <p className="president-country">
            O‘zbekiston Respublikasi Prezidenti
          </p>
        </div>
      </div>

      <img className="img" src={Mix} alt="education" />
    </div>
  );
};

export default Right;
