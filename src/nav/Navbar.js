import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Search } from "@material-ui/icons";
const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`Navbar ${show && "Navbar__showNew"}`}>
      <img
        src="https://moe.gov.lk/wp-content/uploads/2020/05/ministry-of-education-sri-lanka-logo.png"
        className="Navbar__logo"
        alt="logo"
      />

      <div className="Navbar__nav">
        <div className="Navbar__search">
          <input
            type="text"
            className="Navbar__searchInput text-center"
            placeholder="Search Something..."
          />
          <Search className="search__icon" />
        </div>
        <Link to="/" className={`Navbar__link ${show && "Navbar_linkScroll"}`}>
          <span>Ministry</span>
        </Link>
        <Link to="/" className={`Navbar__link ${show && "Navbar_linkScroll"}`}>
          <span>Students</span>
        </Link>
        <Link to="/" className={`Navbar__link ${show && "Navbar_linkScroll"}`}>
          <span>Academic</span>
        </Link>
        <Link to="/" className={`Navbar__link ${show && "Navbar_linkScroll"}`}>
          <div className="dropdown show">
            <a
              className={`dropdown-toggle ${
                show ? "drop__black" : "drop__white"
              }`}
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Language
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link className="dropdown-item">Tamil</Link>
              <Link className="dropdown-item">English</Link>
              <Link className="dropdown-item">Sinhala</Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
