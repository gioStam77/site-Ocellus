import { FaRegEye } from "react-icons/fa";
import { GiErlenmeyer } from "react-icons/gi";
import { FaGlasses } from "react-icons/fa";

export const ProductList = [
  {
    title: "Γυαλιά",
    path: "/glasses",
    cName: "dropDownList",
    image: <FaGlasses className="glasses-image" />,
  },
  {
    title: "Φ.Επαφής",
    path: "/contactLens",
    cName: "dropDownList",
    image: <FaRegEye className="contactLens-image" />,
  },
  {
    title: "Υγρά-Αξεσουάρ",
    path: "/solutions",
    cName: "dropDownList",
    image: <GiErlenmeyer className="liquid-image" />,
  },
];
