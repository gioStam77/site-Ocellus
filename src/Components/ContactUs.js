import React, { useState } from "react";

function ContactUs() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="containerForm">
      <form
        className="form"
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
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
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            className="formItems"
            placeholder="Email "
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            className="formItems"
            placeholder="Τίτλος"
            name="subject"
            value={values.subject}
            onChange={handleChange}
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
            onChange={handleChange}
            value={values.message}
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
  );
}

export default ContactUs;
