import React from "react";
import { Link } from "react-router-dom";
import daSole from "../IMAGES/daSole.jpg";
import daVista from "../IMAGES/daVista.jpg";
import takis2 from "../IMAGES/takis2.jpg";
import Logos from "./Logos";

function Glasses() {
  return (
    <div className="glasses-page">
      <ul className="glassesContainer">
        <Link to="/sole">
          {" "}
          <li
            className="glassesItem"
            style={{ backgroundImage: `url(${daSole})` }}
          >
            <h3 className="text-blue">ηλιου</h3>
          </li>
        </Link>
        <Link to="/general">
          <li
            className="glassesItem"
            style={{
              backgroundImage: `url(${takis2})`,
              backgroundSize: "150%",
              backgroundPositionY: "5%",
            }}
          >
            <h3 className="text-blue">προσφορες</h3>
          </li>
        </Link>
        <Link to="/vista">
          <li
            className="glassesItem"
            style={{ backgroundImage: `url(${daVista})` }}
          >
            <h3 className="text-blue">ορασεως</h3>
          </li>
        </Link>
      </ul>
      <Logos />
    </div>
  );
}

export default Glasses;
