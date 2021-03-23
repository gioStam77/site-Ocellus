import React from "react";

function ContactUs() {
  return (
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
            type="file"
            className="formItems-file"
            placeholder="Upload File"
            name="myfile"
          />
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
  );
}

export default ContactUs;
