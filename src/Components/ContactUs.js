import React from "react";

function ContactUs() {
  return (
    <div className="contactUs">
      <div className="OpeningHours-container">
        <div className="OpeningHours-card">
          <h3>Ωράριο Λειτουργίας</h3>
          <p>Δευτέρα-Τετάρτη-Σάββατο: 09:00 - 14:00</p>
          <p>Τρίτη-Πέμπτη-Παρασκευή: 09:00 -13:30 και 17:30-20:30</p>
          <br />
          <p>Π.Τριοβάσαλος , ΤΚ:84800 , Μήλος , Κυκλάδες</p>
        </div>
      </div>{" "}
      <div className="contactUs-logos">
        <img
          src="./images/gfFerre.png"
          height="50"
          style={{ margin: "2vw 3vw" }}
        />{" "}
        <img
          src="./images/hofman.png"
          height="120"
          style={{ margin: "2vw 1vw" }}
        />
        <img
          src="./images/invu.png"
          height="40"
          style={{ margin: "2vw 1vw" }}
        />
        <img
          src="./images/paulFrank 1.jpg"
          height="100"
          style={{ margin: "2vw 1vw" }}
        />
        <img
          src="./images/reebok.png"
          height="50"
          style={{ margin: "2vw 2vw" }}
        />
      </div>
      <div className="OpeningHours-container1">
        <div className="OpeningHours-card1">
          <h3>Φόρμα Επικοινωνίας</h3>
        </div>
      </div>
      <div className="containerForm">
        <form
          className="form"
          name="contact"
          action="POST"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <input name="bot-field" />
          </div>

          <div>
            <input
              type="text"
              className="formItems"
              placeholder="Ονομα"
              name="name"
            />
          </div>
          <div>
            <input
              type="email"
              className="formItems"
              placeholder="Email "
              name="email"
            />
          </div>
          <div>
            <input
              type="text"
              className="formItems"
              placeholder="Τίτλος"
              name="subject"
            />
          </div>
          <div>
            <textarea
              className="formItems"
              id=""
              cols="26"
              rows="9"
              placeholder="Το μήνυμά σας"
              name="message"
            ></textarea>
          </div>

          <div>
            <input
              type="submit"
              value="Αποστολή Μηνύματος"
              className="btn-form"
            />
          </div>
        </form>
      </div>
      <div className="logo-container">
        {" "}
        <img
          src="./images/funkyBudda.png"
          height="70"
          style={{ margin: "1vw" }}
        />
        <img
          src="./images/gfFerre.png"
          height="50"
          style={{ margin: "1vw 1vw" }}
        />
        <img
          src="./images/elGreco.png"
          height="50"
          style={{ margin: "1vw 1vw" }}
        />
        <img
          src="./images/annaRiska.png"
          height="50"
          style={{ margin: "1vw 1vw" }}
        />
        <img
          src="./images/3guys.png"
          height="60"
          style={{ margin: "1vw 1vw" }}
        />
        <img
          src="./images/pepe-jeans-logo.jpg"
          height="100"
          style={{ margin: "1vw 1vw" }}
        />
        <img
          src="./images/superDry.png"
          height="60"
          style={{ margin: "1vw 2vw" }}
        />
      </div>
    </div>
  );
}

export default ContactUs;
