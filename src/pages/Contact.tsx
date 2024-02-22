import { useState } from "react";
import { motion } from "framer-motion";
import "../CssPages/Contact.css";
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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");

  const emailRegex =
    /^[a-z][a-z0-9_]*@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const handleEmailChange = (event: any) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);

    if (!emailRegex.test(enteredEmail)) {
      setEmailError("Introduceți o adresă de email validă");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneChange = (event: any) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    setPhone(numericValue);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!name || !email || !phone || !message) {
      setFormError("Toate câmpurile marcate cu * trebuie completate.");
      return;
    }

    console.log("Message send!");
  };

  return (
    <>
      <div className="contact-container">
        <motion.div
          className="contact-inner-container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
        >
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="label-contact">
                Nume <span>*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Introduceți numele"
                required
              />

              <label htmlFor="email" className="label-contact">
                Email <span>*</span>
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

              <label htmlFor="phone" className="label-contact">
                Telefon <span>*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="Introduceți numărul de telefon"
                required
              />

              <label htmlFor="message" className="label-contact">
                Mesaj
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Introduceți mesajul"
              ></textarea>

              {formError && <p style={{ color: "red" }}>{formError}</p>}

              <button type="submit" className="btn-trimite">
                Trimite
              </button>
            </form>
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
                  to="https://www.google.com/maps/place/Strada+Gradinarilor+nr.+4,+Sibiu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Strada Gradinarilor nr. 4
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
    </>
  );
}

export default Contact;
