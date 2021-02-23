import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaRegCaretSquareDown } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { VscHome } from "react-icons/vsc";
import { BsBag } from "react-icons/bs";

import { IoPersonOutline, IoTerminal } from "react-icons/io5";
import { VscMail } from "react-icons/vsc";
import DropDownP from "./DropDownP";
import DropDownS from "./DropDownS";

function Navbar() {
  const [click, setclick] = useState(false);
  const [dropdownP, setDropdownP] = useState(false);
  const [dropdownS, setDropdownS] = useState(false);

  const handleClick = () => {
    setclick(!click);
  };
  const closeMobileMenu = () => {
    setclick(false);
  };

  const onMouseEnterP = () => {
    if (window.innerWidth < 960) {
      setDropdownP(true);
    } else {
      setDropdownP(true);
    }
  };
  const onMouseLeaveP = () => {
    if (window.innerWidth < 960) {
      setDropdownP(false);
    } else {
      setDropdownP(false);
    }
  };
  const onMouseEnterS = () => {
    if (window.innerWidth < 960) {
      setDropdownS(true);
    } else {
      setDropdownS(true);
    }
  };

  const onMouseLeaveS = () => {
    if (window.innerWidth < 960) {
      setDropdownS(false);
    } else {
      setDropdownS(false);
    }
  };
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img
          src="./images/πινακιδα.jpg"
          alt=""
          width='140'
          style={{ borderRadius: 10 }}
        />
      </Link>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/contactUs" className="nav-item">
            <FaPhoneAlt className="tel-icon" /> 22870 22072
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contactUs">
            <VscMail className="mail-icon" /> ocellus.gr@gmail.com
          </Link>
        </li>
      </ul>
      <ul className={click ? "navbar-nav1 active" : "navbar-nav1"}>
        <li className="nav-item-links">
          <Link to="/"onClick={closeMobileMenu} >
            <VscHome className="home-icon" />
          </Link>
        </li>
        <li
          className="nav-item-links"
          onMouseEnter={onMouseEnterP}
          onMouseLeave={onMouseLeaveP}
        >
          <Link to="/product" onClick={closeMobileMenu}>
            {dropdownP && <DropDownP />}Προϊόντα{" "}
          </Link>
          <FaRegCaretSquareDown className="icon-down" />
        </li>
        <li
          className="nav-item-links"
          onMouseEnter={onMouseEnterS}
          onMouseLeave={onMouseLeaveS}
        >
          <Link to="/servises" onClick={closeMobileMenu}>
            {dropdownS && <DropDownS />}Υπηρεσίες
          </Link>

          <FaRegCaretSquareDown className="icon-down" />
        </li>
        <li className="nav-item-links">
          <Link to="/signUp"onClick={closeMobileMenu} >
            <IoPersonOutline className="user-icon" />
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/cart">
          <i className="bag-icon">
            <BsBag />
          </i>
        </Link>
      </div>

      <div className="menu-icon" onClick={handleClick}>
        <i> {click ? <FaTimes /> : <FaBars />} </i>
      </div>
    </nav>
  );
}

export default Navbar;
