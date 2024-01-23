import React, { useState } from "react";
import { motion } from "framer-motion";
import "../CssPages/Contact.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  const workingHours = [
    { day: "Mon", hours: "09:00 - 18:00" },
    { day: "Tue", hours: "09:00 - 18:00" },
    { day: "Wed", hours: "09:00 - 18:00" },
    { day: "Thu", hours: "09:00 - 18:00" },
    { day: "Fri", hours: "09:00 - 18:00" },
    { day: "Sat", hours: "Closed", bold: true },
    { day: "Sun", hours: "Closed", bold: true },
  ];

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const emailRegex =
    /^[a-z][a-z0-9_]*@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);

    if (!emailRegex.test(enteredEmail)) {
      setEmailError("Introduceți o adresă de email validă");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    const phoneInput = document.getElementById("phone") as HTMLInputElement;

    if (phoneInput) {
      phoneInput.value = numericValue;
    }
  };

  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="contact-container">
        <motion.div
          className="contact-inner-container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
        >
          <div className="contact-form">
            <label
              htmlFor="name"
              style={{ color: "#022352", fontSize: "22px", fontWeight: 400 }}
            >
              Nume (obligatoriu)
            </label>
            <input
              type="text"
              id="name"
              placeholder="Introduceți numele"
              required
            />

            <label
              htmlFor="email"
              style={{ color: "#022352", fontSize: "22px", fontWeight: 400 }}
            >
              Email (obligatoriu)
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Introduceți adresa de email"
              required
            />
            {emailError && <p style={{ color: "red" }}>{emailError}</p>}

            <label
              htmlFor="phone"
              style={{ color: "#022352", fontSize: "22px", fontWeight: 400 }}
            >
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              onChange={handlePhoneChange}
              placeholder="Introduceți numărul de telefon"
              required
            />

            <label
              htmlFor="message"
              style={{ color: "#022352", fontSize: "22px", fontWeight: 400 }}
            >
              Mesaj
            </label>
            <textarea id="message" placeholder="Introduceți mesajul"></textarea>

            <button className="btn-trimite">Trimite</button>
          </div>

          <div className="contact-info">
            <h2 className="title-contact">Hai să ne cunoaștem</h2>
            <p className="text-contact">Program:</p>

            <ul>
              {workingHours.map((dayInfo, index) => (
                <li key={index}>
                  {dayInfo.bold ? (
                    <strong>{dayInfo.day}:</strong>
                  ) : (
                    <span>{dayInfo.day}:</span>
                  )}
                  <span className="hours">{dayInfo.hours}</span>
                </li>
              ))}
            </ul>

            <div>
              <h4 className="title-contact">Adresa</h4>
              <p className="text-contact">
                <FaMapMarkerAlt />
                <Link
                  to="https://www.google.com/maps/place/Strada+Gradinarilor+nr.+6,+Sibiu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Strada Gradinarilor nr. 6
                </Link>
              </p>
              <p className="text-contact">
                <FaPhone className="me-2" />
                <Link to="tel:+40753082874" className="navbar-link">
                  +40 753 082 874
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
