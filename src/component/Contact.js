import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser"; // Updated import for emailjs

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

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

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="form-control">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              className="form-group"
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* Email Address */}
          <div className="form-control">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              className="form-group"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Message */}
          <div className="form-control">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              className="form-group"
              placeholder="Enter Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {/* Submit Button */}
          <button type="submit" onClick={handleSubmit}>
            Send Message
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
