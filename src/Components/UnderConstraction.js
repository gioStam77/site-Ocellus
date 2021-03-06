import React from "react";
import Logos from "./Logos";

function UnderConstraction(props) {
  return (
    <>
      <div className="underConstraction">
        <h3 className="text-title">under constraction</h3>
        <h3 className="text-bright">{props.title}</h3>
        <img
          className="underConstraction-image"
          src="./images/underConstraction1.png"
          alt="εικόνα υπο κατασκευή"
        />
      </div>
      <Logos />
    </>
  );
}

export default UnderConstraction;
