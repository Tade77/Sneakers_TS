import React from "react";
import "./ContactStyle.css";
import { contactData } from "../../Data";

const Contact = () => {
  return (
    <div className="contact--container">
      <section className="store--info">
        <h1>Store Information</h1>
        {contactData.map((info) => (
          <>
            <div key={info.id} className="office--info">
              <img className="con--img" src={info.image} alt="" />
              <p className="info">{info.contactText}</p>
            </div>
          </>
        ))}
      </section>
      <section className="contact--info">
        <h1 style={{ color: "#fff" }}>Contact Us</h1>
        <input type="text" placeholder="Name" id="name" required />
        <input type="email" placeholder="Email" id="email" required />
        <textarea placeholder="How can we help you?" id="message" />
        <button className="send">Send</button>
      </section>
    </div>
  );
};

export default Contact;
