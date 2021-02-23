import { FaPhoneAlt } from "react-icons/fa";
import { IoConstructOutline } from "react-icons/io5";
export const ProductListS = [
  {
    title: "Εργαστήριο",
    path: "/general",
    cName: "dropDownList",
    image: <IoConstructOutline className="service-image" />,
  },
  {
    title: "Οδηγίες Φ.Επαφης",
    path: "/useOfContactLens",
    cName: "dropDownList",
  },
  {
    title: "Eπικοινωνία",
    path: "/contactUs",
    cName: "dropDownList",
    image: <FaPhoneAlt className="tel-icon" />,
  },
];
