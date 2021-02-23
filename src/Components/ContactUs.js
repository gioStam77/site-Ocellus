import React from "react";

function ContactUs() {
  return (
    <div className="containerForm">
      <form className="form">
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
            name="subject/"
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
          />
        </div>
        <div>
          <input
            type="submit"
            className="btn-form"
            value="Αποστολή Μηνύματος"
          ></input>
        </div>
        <div className="formTel">
          <h3>τηλεφωνο</h3>
          <p>22870-22072</p>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
