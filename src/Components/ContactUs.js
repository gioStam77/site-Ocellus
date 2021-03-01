import React, { useState } from "react";

function ContactUs() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const handleChange = (event) => {
    setName(event.target.value);
    setEmail(event.target.value);
    setSubject(event.target.value);
    setMessage(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${name}`);
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
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <input
            type="email"
            className="formItems"
            placeholder="Email "
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            className="formItems"
            placeholder="Τίτλος"
            name="subject"
            value={subject}
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
            value={message}
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
