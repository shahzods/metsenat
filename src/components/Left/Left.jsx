import "./Left.css";
import React, { useState } from "react";
import Successful from "../../assets/images/successful.png";

const Left = () => {
  const [input, setInput] = useState(false);
  const [tashkilot, setTashkilot] = useState(false);
  const [modal, setModal] = useState(false);

  const openInput = () => {
    setInput(!input);
  };

  const openTashkilot = () => {
    setTashkilot(!tashkilot);
  };

  const closeTashkilot = () => {
    setTashkilot(tashkilot === null);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  if (input) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }

  if (tashkilot) {
    document.body.classList.add("open");
  } else {
    document.body.classList.remove("open");
  }

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="left">
      <h1 className="left-text">Homiy sifatida ariza topshirish</h1>

      <div className="left-inner">
        <form
          target="_blank"
          action="https://echo.htmlacademy.ru"
          method="post"
        >
          <div className="inner-btn">
            <input
              className="btn-l"
              onClick={closeTashkilot}
              type="button"
              value="Jismoniy shaxs"
            />
            <input
              className="btn-r"
              onClick={openTashkilot}
              type="button"
              value="Yuridik shaxs"
            />
          </div>

          <label className="label" htmlFor="fname">
            F.I.Sh. (Familiya Ism Sharifingiz)
          </label>
          <input
            className="input-name"
            type="text"
            id="fname"
            name="fname"
            placeholder="Abdullayev Abdulla Abdulla o’g’li"
          />

          <label className="label" htmlFor="fnum">
            Telefon raqamingiz
          </label>
          <input
            className="input-num"
            type="tel"
            id="fnum"
            name="fnum"
            placeholder="+998 00 000-00-00"
          />

          <div className="input-sums">
            <label className="label" htmlFor="fsum">
              To‘lov summasi
            </label>
            <div className="sums-box">
              <input
                className="sum-btn"
                type="button"
                id="fsum"
                name="fsum"
                value="1 000 000 uzs"
              />
              <input
                className="sum-btn"
                type="button"
                id="fsum"
                name="fsum"
                value="5 000 000 uzs"
              />
              <input
                className="sum-btn"
                type="button"
                id="fsum"
                name="fsum"
                value="7 000 000 uzs"
              />
              <input
                className="sum-btn"
                type="button"
                id="fsum"
                name="fsum"
                value="10 000 000 uzs"
              />
              <input
                className="sum-btn"
                type="button"
                id="fsum"
                name="fsum"
                value="30 000 000 uzs "
              />
              <input
                onClick={openInput}
                className="boshqa-btn"
                type="button"
                id="fsum"
                name="fsum"
                value="Boshqa"
              />
            </div>
            {input && (
              <input
                className="boshqa-sum"
                type="number"
                id="fsum"
                name="fsum"
                placeholder="0"
              />
            )}
          </div>

          {tashkilot && (
            <div className="input-tashkilot">
              <label className="label" htmlFor="ftashkilot">
                Tashkilot nomi
              </label>
              <input
                className="tashkilot"
                type="text"
                id="ftashkilot"
                name="ftashkilot"
                placeholder="Orient group"
              />
            </div>
          )}

          <input
            onClick={toggleModal}
            className="input-submit"
            type="submit"
            value="Yuborish"
          />
        </form>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <img
              className="modal-img"
              src={Successful}
              width="120"
              height="120"
              alt="successful"
            />
            <h4 className="modal-h">Ma’lumotlar tekshirish uchun yuborildi.</h4>
            <p className="modal-text">
              Tez orada siz bilan operatorimiz bog’lanib, barcha ma’lumotlarni
              aniqlashtiradi.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Left;
