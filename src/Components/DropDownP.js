import React, { useState } from "react";
import { ProductList } from "./ProductList";
import { Link } from "react-router-dom";

function DropDownP() {
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
        {ProductList.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
                onTouchMove={() => setClick(false)}
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

export default DropDownP;
