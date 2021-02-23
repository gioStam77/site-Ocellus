import React from "react";
import { Link } from "react-router-dom";
import cLens from "../IMAGES/cLens1.jpg";

function ContactLens() {
  return (
    <ul className="glassesContainer">
      <Link to="/dayContactLensses">
        {" "}
        <li
          className="glassesItem"
          style={{ backgroundImage: `url(${cLens})` }}
        >
          <h3>ημερησιοι</h3>
        </li>
      </Link>
      <Link to="/monthlies">
        <li
          className="glassesItem"
          style={{ backgroundImage: `url(${cLens})` }}
        >
          <h3 className="text-title">μηνιαιοι</h3>
        </li>
      </Link>
      <Link to="/year">
        <li
          className="glassesItem"
          style={{ backgroundImage: `url(${cLens})` }}
        >
          <h3 className="text-title">ετησιοι</h3>
        </li>
      </Link>
    </ul>
  );
}

export default ContactLens;
