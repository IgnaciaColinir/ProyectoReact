import React from "react";
import "./Contact.scss";
import { Link } from "react-router";
import { Header } from "../../components/organisms/Header";
import { Footer } from "../../components/organisms/Footer";
import { Button } from "../../components/atoms/Button";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <Header />
      </div>
      <div className="desc">
        <div className="container">
          <p>GET IN TOUCH</p>
          <h1>Contact Us</h1>
          <p>we´re here to help! Where you have a question,</p>
          <p>feedback, or need assistance, feel free to reach out.</p>
        </div>
      </div>
      <div className="container">
        <div className="pre-footer">
          <ul className="info">
            <h3>Our Contact Information</h3>
            <li className="contact">
              <div className="phone contact-info">
                <div>
                  <i className="bi bi-telephone"></i>
                </div>

                <div>
                  <h5>Phone</h5>
                  <p>+569 111111111</p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="email contact-info">
                <div>
                  <i className="bi bi-envelope"></i>
                </div>

                <div>
                  <h5>Email</h5>
                  <p>support@velvetique.com</p>
                  <p>We´ll back to you within 24 hours</p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="location contact-info">
                <div>
                  <i className="bi bi-geo-alt"></i>
                </div>

                <div>
                  <h5>Visit us</h5>
                  <p>1234 velvetique,Maipú,Region Metropolitana</p>
                  <p>By appointment or during bussiness hours.</p>
                </div>
              </div>
            </li>
          </ul>
          <div className="message">
            <h3>Send Us a Message</h3>
            <p>------</p>
            <div>
              <form className="name-mail">
                <div id="name">
                  <label>Full Name</label>
                  <br />
                  <input type="text" placeholder="Your name" />
                </div>
                <div id="email">
                  <div>
                    <label>Email Adress</label>
                  </div>
                  <input type="text" placeholder="your@email" />
                </div>
              </form>
            </div>
            <div className="comment">
              <div>
                <label className="msg">Subject</label>
              </div>
              <input type="text" placeholder="Write your subject" />
              <div className="msg">
                <label>Message</label>
              </div>
              <textarea>How can we help you?</textarea>
              <br />
              <Button variant="primary">Envia un mensaje</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
