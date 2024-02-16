import "../CssPages/Srl.css";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import img from "../images/hero7.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { detalii } from "./detalii";

function Srl() {
  const navigate = useNavigate();
  const { reviews, srlText, srlLiDetails, srlLiText } = detalii;
  const [firmaName, setFirmaName] = useState("Contabilitate");
  const [reviewIndex, setReviewIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomNames = [
        "Contabilitate",
        "Imobiliare",
        "Foto-Video",
        "Distributie",
        "Turism",
      ];
      const randomIndex = Math.floor(Math.random() * randomNames.length);
      setFirmaName(randomNames[randomIndex]);

      setReviewIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const handleGoButton = () => {
    navigate("/Contact");
  };

  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="srl-big-container">
        <div className="srl-secound-container">
          <div className="srl-details">
            <h1>
              Înființează-ți SRL <span className="span-srl">online</span>, în
              doar
              <span className="span-srl"> 3 zile</span>
            </h1>
            <div>
              <ul>
                {Object.values(srlLiDetails).map((itemText, index) => (
                  <li key={index}>{itemText}</li>
                ))}
              </ul>
              <button onClick={handleGoButton} className="btn-start">
                INCEPE ACUM
              </button>
            </div>

            <div className="review">
              <div className="stars-container">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="star">
                    &#9733;
                  </span>
                ))}
              </div>
              <p className="review-paragraph">{reviews[reviewIndex]}</p>
            </div>
          </div>

          <div className="srl-img">
            <img src={img} alt="" className="img-responsive img-hero" />
            <div className="img-overlay">
              <p>Firma ta de </p>
              <h3 className="firma">{firmaName}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="evfiam-srl">
        <h2 className="evfiam-title">
          De ce să alegi <span>Evfiam</span>
        </h2>
        <div className="evfiam-details">
          <div className="evfiam-section">
            {Object.values(srlText).map((item, index) => (
              <div className="info-item" key={index}>
                <h3 className="info-item-title">{item.title}</h3>
                <p className="item-details">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cost-srl">
        <div className="secound-cost-srl">
          <div className="first-container">
            <h1>Cat costa?</h1>
            <div className="price-srl">
              <h2>600 RON + TVA</h2>
              <p>+128 RON Monitorul Oficial</p>
            </div>
            <button className="btn-cost" onClick={handleGoButton}>
              INFIINTEAZA SRL
            </button>
          </div>

          <div className="secound-container">
            <ul>
              {Object.values(srlLiText).map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Srl;
