import React from "react";
import { Link } from "react-router-dom";
import daSole from "../IMAGES/daSole.jpg";
import daVista from "../IMAGES/daVista.jpg";
import takis2 from "../IMAGES/takis2.jpg";

function Glasses() {
  return (
    <ul className="glassesContainer">
      <Link to="/sole">
        {" "}
        <li
          className="glassesItem"
          style={{ backgroundImage: `url(${daSole})` }}
        >
          <h3>ηλιου</h3>
        </li>
      </Link>
      <Link to="/general">
        <li
          className="glassesItem"
          style={{
            backgroundImage: `url(${takis2})`,
            backgroundPositionY: "10%",
          }}
        >
          <h3 className="text-title">προσφορες</h3>
        </li>
      </Link>
      <Link to="/vista">
        <li
          className="glassesItem"
          style={{ backgroundImage: `url(${daVista})` }}
        >
          <h3 className="text-title">οράσεως</h3>
        </li>
      </Link>
    </ul>
  );
}

export default Glasses;
