import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("");
    setName("");
    setEmail("");

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "service_49knah8",
        "template_s2du2ur",
        templateParams,
        "yy9jFbFJQJsI1yepX"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div className="contacts-container">
      <h2 className="contact-us">
        <span>LET'S WORK TOGETHER</span>
      </h2>
      <p className="show-email">
        <span>Email</span>: djvortex99@gmail.com
      </p>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="name-container">
            <h5 For="name">
              Full Name / Company Name
              <span className="required"> (required)</span>
            </h5>
            <input
              type="text"
              className="name-input"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="email-container">
            <h5 For="email">
              Email Address<span className="required"> (required)</span>
            </h5>
            <input
              type="text"
              className="email-input"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="message-container">
            <h5 For="message">
              Message
              <span className="required"> (required)</span>
            </h5>
            <textarea
              type="text"
              className="message"
              placeholder=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            SUBMIT
          </button>
        </form>
      </div>
      <blockquote className="quote" data-animation-role="quote">
        <span>"</span>
        WE SHALL NOT CEASE FROM EXPLORATION AND AT THE END OF ALL OUR EXPLORING
        WILL BE TO ARRIVE WHERE WE STARTED AND KNOW THE PLACE FOR THE FIRST
        TIME.
        <span>"</span>
      </blockquote>
      <h5 className="author">— T. S. ELIOT</h5>
    </div>
  );
}

export default Contact;
