import React from "react";

function ContactUs() {
  return (
    <div className="containerForm">
      <form
        className="form"
        name="contact v1"
        method="post"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact v1" />
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
          <button type="submit" className="btn-form">
            Αποστολή Μηνύματος
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
