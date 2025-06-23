import React from 'react';
import './Contact.css';
import contact from "../../assets/contact.png";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h5>CONTACT</h5>
      <h2>Contact With Me</h2>

      <div className="contact-container">
        {/* Left Side: Info */}
        <div className="contact-info">
          <img src={contact} alt="Contact Illustration" />
          <h3>Sundara Pandi P</h3>
          <p className="role">Fresher</p>
          <p className="connect-text">Connect with me via and call in to my account.</p>
          <p><strong>Phone:</strong> +01234567890</p>
          <p><strong>Email:</strong> admin@example.com</p>
        </div>

        {/* Right Side: Form */}
        <form className="contact-form">
          <div className="row">
            <input type="text" placeholder="Your Name" required />
            <input type="text" placeholder="Phone Number" required />
          </div>
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message →</button>
        </form>
      </div>

      {/* Copyright */}
      <p className="copyright">© Sundara Pandi </p>
    </section>
  );
};

export default Contact;
