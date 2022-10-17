import "./Navbar.css";
import Search from "../../assets/images/search.svg";
import Filter from "../../assets/images/filter-icon.svg";
import fClose from "../../assets/images/f-close.svg";
import Cleaner from "../../assets/images/cleaner.svg";
import Eye from "../../assets/images/eye.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [filter, setFilter] = useState(false);

  const toggleFilter = () => {
    setFilter(!filter);
  };

  if (filter) {
    document.body.classList.add("active-f-modal");
  } else {
    document.body.classList.remove("active-f-modal");
  }

  return (
    <nav className="Navbar">
      <div className="container">
        <div className="navbar">
          <div className="navbar-links">
            <Link className="link1" to="/adminpage">
              Dashboard
            </Link>
            <Link className="link2" to="/homiylarpage">
              Homiylar
            </Link>
            <Link className="link3" to="/talabalarpage">
              Talabalar
            </Link>
          </div>

          <div className="navbar-right">
            <div className="search-box">
              <img src={Search} width="20" height="20" alt="search" />
              <input className="search " type="text" placeholder="Izlash" />
            </div>

            <button onClick={toggleFilter} className="filter-box">
              <img src={Filter} width="16" height="16" alt="filter" />
              <p className="filter-text">Filter</p>
            </button>

            {filter && (
              <div className="f-modal">
                <div onClick={toggleFilter} className="f-overlay"></div>
                <div className="f-modal-content">
                  <div className="filter-top">
                    <h4 className="filter-name">Filter</h4>
                    <button className="f-close-modal" onClick={toggleFilter}>
                      <img src={fClose} width="28" height="28" alt="close" />
                    </button>
                  </div>

                  <hr style={{ margin: 0 }} />

                  <form>
                    <label className="filter-label" htmlFor="f-name">
                      Ariza holati
                    </label>
                    <select
                      className="filter-select form-select"
                      name="f-name"
                      id="f-name"
                      form="f-form"
                    >
                      <option value="barchasi">Barchasi</option>
                      <option value="yangi">Yangi</option>
                      <option value="moderatsiyada">Moderatsiyada</option>
                      <option value="tasdiqlangan">Tasdiqlangan</option>
                      <option value="bekor-qilingan">Bekor qilingan</option>
                    </select>

                    <label className="filter-label" htmlFor="f-sum">
                      Homiylik summasi
                    </label>
                    <div className="filter-sums-box">
                      <input
                        className="filter-boshqa-btn"
                        type="button"
                        id="f-sum"
                        name="f-sum"
                        value="Barchasi"
                      />
                      <input
                        className="filter-sum-btn"
                        type="button"
                        id="f-sum"
                        name="f-sum"
                        value="1 000 000 uzs"
                      />
                      <input
                        className="filter-sum-btn"
                        type="button"
                        id="f-sum"
                        name="f-sum"
                        value="5 000 000 uzs"
                      />
                      <input
                        className="filter-sum-btn"
                        type="button"
                        id="f-sum"
                        name="f-sum"
                        value="7 000 000 uzs"
                      />
                      <input
                        className="filter-sum-btn"
                        type="button"
                        id="f-sum"
                        name="f-sum"
                        value="10 000 000 uzs "
                      />
                      <input
                        className="filter-sum-btn"
                        type="button"
                        id="f-sum"
                        name="f-sum"
                        value="30 000 000 uzs"
                      />
                      <input
                        className="filter-sum-btn"
                        type="button"
                        id="f-sum"
                        name="f-sum"
                        value="50 000 000 uzs"
                      />
                    </div>

                    <label className="filter-label" htmlFor="f-sana">
                      Sana
                    </label>
                    <input
                      className="filter-data"
                      type="date"
                      id="f-sana"
                      name="f-sana"
                    />
                  </form>

                  <hr className="hr" />

                  <div className="filter-links">
                    <button className="filter-clean">
                      <img
                        src={Cleaner}
                        width="24"
                        height="24"
                        alt="tozalash"
                      />
                      <p className="cleaner-text">Tozalash</p>
                    </button>

                    <button className="filter-eye" onClick={toggleFilter}>
                      <img
                        src={Eye}
                        width="24"
                        height="24"
                        alt="natijani ko'rish"
                      />
                      <p className="eye-text">Natijalarni ko‘rish</p>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
