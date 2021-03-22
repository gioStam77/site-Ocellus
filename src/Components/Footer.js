import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="foo-wrapper">
      <div className="foo-container">
        <div className="foo-row">
          <div className="foo-col">
            <h3>στοιχεία επικοινωνίας</h3>
            <ul>
              <li>
                <FaPhoneAlt style={{ marginRight: "4px" }} />
                22870-22072
              </li>
              <li>διεύθυνση: Π.Τριοβάσαλος</li>
              <li>Μήλος , Κυκλάδες</li>
              <li>Τ.Κ 84800</li>
              <li>
                <VscMail />
                <Link to="/contactUs">ocellus.gr@gmail.com</Link>
              </li>
            </ul>
          </div>
          <div className="foo-col">
            <h3>κατηγορίες</h3>
            <ul className="ul-links">
              <Link to="/sole">
                <li>γυαλιά ηλίου</li>
              </Link>
              <Link to="/vista">
                <li>γυαλιά οράσεως</li>
              </Link>
              <Link to="contactLens">
                <li>φακοί επαφής</li>
              </Link>

              <Link to="general">
                <li>εργαστήριο</li>
              </Link>
              <Link to="/solutions">
                <li>υγρά αξεσουάρ</li>
              </Link>
              <Link to="/">
                <li>προσφορές</li>
              </Link>
            </ul>
          </div>
          <div className="foo-col">
            <h3>φόρμα επικοινωνίας</h3>
            <div>
              <form
                className="form-footer"
                name="contact-footer"
                action="post"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact-footer" />
                <div hidden>
                  <input name="bot-field" />
                </div>

                <div>
                  <input
                    type="email"
                    className="formItems-footer"
                    placeholder="Email "
                    name="email"
                  />
                </div>

                <div>
                  <textarea
                    className="formItems-footer"
                    id=""
                    cols="22"
                    rows="6"
                    placeholder="Το μήνυμά σας"
                    name="message"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="submit"
                    value="Αποστολή"
                    className="btn-form-footer"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <p>
            &copy;{new Date().getFullYear()}ocellus|designed by G.STAM|all right
            reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
