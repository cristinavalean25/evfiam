import "../CssPages/AboutUs.css";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import imgBusiness from "../images/business.jpg";
import Footer from "./Footer";
import { detalii } from "./detalii";

function AboutUs() {
  const { descriereAbout } = detalii;
  return (
    <>
      <TopNavbar />
      <Navbar />

      <div className="about-us-container">
        <div className="background-container-about">
          <img
            src={imgBusiness}
            alt="Business"
            className="responsive-image-about"
          />
        </div>
      </div>
      <div className="sec-about-container">
        {descriereAbout.map((section, index) => (
          <div className="sec-about-container-text" key={index}>
            <h2 className="about-title">{section.title}</h2>
            <div className="details-text-about">
              <p className="text-about">{section.paragraphs}</p>
              <p className="text-about">{section.paragraphs2}</p>
              <p className="text-about">{section.paragraphs3}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
