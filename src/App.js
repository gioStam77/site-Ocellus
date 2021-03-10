import React from "react";
import { Route, Switch } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import Default from "./Components/Default";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

import SingUp from "./Components/SingUp";
import "./App.css";
import Glasses from "./Components/Glasses";
import ContactLens from "./Components/ContactLens";
import Solutions from "./Components/Solutions";
import UnderConstraction from "./Components/UnderConstraction";
import Cart from "./Components/Cart";
import UseOfContactLens from "./Components/UseOfContactLens";

import Sole from "./Components/Sole";
import Vista from "./Components/Vista";
import Dailies from "./Components/Dailies";
import Monthly from "./Components/Monthly";
import Year from "./Components/Year";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>

          <Route path="/glasses" component={Glasses}></Route>
          <Route path="/contactLens" component={ContactLens}></Route>
          <Route path="/solutions" component={Solutions}></Route>
          <Route path="/general" component={UnderConstraction}></Route>
          <Route path="/signUp" component={SingUp}></Route>
          <Route path="/contactUs" component={ContactUs}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/useOfContactLens" component={UseOfContactLens}></Route>
          <Route path="/sole" component={Sole}></Route>
          <Route path="/vista" component={Vista}></Route>
          <Route path="/dailies" component={Dailies}></Route>
          <Route path="/monthlies" component={Monthly}></Route>
          <Route path="/year" component={Year}></Route>
          <Route path="/default" component={Default}></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
