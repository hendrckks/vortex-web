import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contacts-container">
      <h2 className="contact-us">
        <span> LET'S WORK TOGETHER</span>
      </h2>
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
