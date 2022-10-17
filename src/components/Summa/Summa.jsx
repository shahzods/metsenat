import "./Summa.css";

const Summa = ({ img, text, num, span }) => {
  return (
    <div className="summa">
      <img src={img} width="48" height="48" alt="money" />

      <div className="inner-summa">
        <p className="summa-text">{text}</p>
        <p className="summa-num">
          {num} <span className="summa-span">{span}</span>
        </p>
      </div>
    </div>
  );
};

export default Summa;
