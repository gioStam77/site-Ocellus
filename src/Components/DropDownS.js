import React, { useState } from "react";
import { ProductListS } from "./ProductListS";
import { Link } from "react-router-dom";

function DropDownS() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropDown-clicked" : "dropDown"}
      >
        {ProductListS.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
                {item.image}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropDownS;
