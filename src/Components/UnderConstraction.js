import React from "react";

function UnderConstraction(props) {
  return (
    <div className="underConstraction">
      <h3 className="text-title">Υπο κατασκευή</h3>
      <h3 className="text-bright">{props.title}</h3>
      <img
        className="underConstraction-image"
        src="./images/underConstraction1.png"
      />
    </div>
  );
}

export default UnderConstraction;
