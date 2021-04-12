import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaRegCaretSquareDown } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { VscHome } from "react-icons/vsc";
import { BsBag } from "react-icons/bs";

import { IoPersonOutline } from "react-icons/io5";
import { VscMail } from "react-icons/vsc";
import DropDownP from "./DropDownP";
import DropDownS from "./DropDownS";

function Navbar() {
  const [click, setclick] = useState(false);
  const [dropdownP, setDropdownP] = useState(false);
  const [dropdownS, setDropdownS] = useState(false);

  const handleClick = () => {
    setclick(!click);
    setDropdownP(false);
    setDropdownS(false);
  };
  const closeMobileMenu = () => {
    setclick(false);
    setDropdownP(false);
    setDropdownS(false);
  };
  const extendElementsP = () => {
    dropdownP ? setDropdownP(false) : setDropdownP(true);
    setDropdownS(false);
  };
  const extendElementsS = () => {
    dropdownS ? setDropdownS(false) : setDropdownS(true);
    setDropdownP(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img
          src="./images/πινακιδα.jpg"
          alt=""
          width="120"
          style={{ borderRadius: 10 }}
        />
      </Link>

      <ul className="navbar-nav">
        <Link to="/contactUs" className="nav-item" onClick={closeMobileMenu}>
          <FaPhoneAlt className="tel-icon" /> 22870 22072
        </Link>

        <Link to="/contactUs" className="nav-item" onClick={closeMobileMenu}>
          <VscMail className="mail-icon  " />
          ocellus.gr@gmail.com
        </Link>
      </ul>
      <ul className={click ? "navbar-nav1 active" : "navbar-nav1"}>
        <li className="nav-item-links">
          <Link to="/" onClick={closeMobileMenu}>
            <VscHome className="home-icon " />
          </Link>
        </li>
        <li className="nav-item-links">
          <Link onClick={extendElementsP}>
            {dropdownP && (
              <DropDownP
                onClick={handleClick}
                onCloseMobileMenu={closeMobileMenu}
              />
            )}
            Προϊόντα
          </Link>
          <FaRegCaretSquareDown className="icon-down" />
        </li>
        <li className="nav-item-links">
          <Link onClick={extendElementsS}>
            {dropdownS && (
              <DropDownS
                onClick={handleClick}
                onCloseMobileMenu={closeMobileMenu}
              />
            )}
            Υπηρεσίες
          </Link>

          <FaRegCaretSquareDown className="icon-down" />
        </li>
        <li className="nav-item-links">
          <Link to="/signUp" onClick={closeMobileMenu}>
            <IoPersonOutline className="user-icon" />
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/cart" className="bag-icon">
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
