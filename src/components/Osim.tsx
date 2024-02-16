import "../CssPages/Osim.css";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import img from "../images/px.jpg";
import people from "../images/pp.png";
import clock from "../images/clock.png";
import asis from "../images/asistenta-juridica.png";
import Footer from "./Footer";
import { detalii } from "./detalii";

function Osim() {
  const { pricesData, osimDetailsData, osimDetailsData2, avantajeOsim } =
    detalii;
  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="container-osim">
        <div className="inner-container">
          <img src={img} alt="Background" />
          <div className="text-container-osim">
            <h1 className="title-osim"> Inregistreaza acum marca ta!</h1>
            <p className="main-text">
              * Oferta Unica, 700 lei onorariu complet pentru inregistrare
              nationala si 1200 lei marca europeana.
            </p>
            <p className="main-text-1">
              * Se adauga taxele oficiale OSIM/EUIPO
            </p>
          </div>
        </div>
      </div>

      <div className="osim-details">
        <div>
          <h2 className="title-osim-3">De ce noi?</h2>
        </div>
        <div className="osim-details-2">
          <div className="gradient-div">
            <img src={people} className="img-osim" />
            <div className="text-container-details">
              <h3 className="title-gradient">Garantam cele mai bune tarife</h3>
              <div className="line-osim"></div>
            </div>
          </div>

          <div className="gradient-div">
            <img src={asis} className="img-osim" />
            <div className="text-container-details">
              <h3 className="title-gradient">Oferim consultanta gratuit</h3>
              <div className="line-osim"></div>
            </div>
          </div>

          <div className="gradient-div">
            <img src={clock} className="img-osim" />
            <div className="text-container-details">
              <h3 className="title-gradient">
                Evaluam sansele de inregistrare
              </h3>
              <div className="line-osim"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="osim-details">
        <div className="osim-details-2">
          {osimDetailsData.map((text, index) => (
            <div className="details-osim-2" key={index}>
              <h3 className="title-osim-3">{text.title}</h3>
              <div className="descriere-osim">
                <p>{text.paragraphs}</p>
                <p>{text.paragraphs1}</p>
              </div>
            </div>
          ))}

          {osimDetailsData2.map((text1, index) => (
            <div className="details-osim-2" key={index}>
              <h3 className="title-osim-3">{text1.title}</h3>
              <div className="descriere-osim">
                <p>{text1.paragraphs}</p>
                <p>{text1.paragraphs1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {avantajeOsim.map((textAv, index) => (
        <div className="details-osim-3" key={index}>
          <h3 className="title-osim-3">{textAv.title}</h3>
          <div className="descriere-osim-1">
            <p>{textAv.parafraph}</p>
            <p>{textAv.parafraph1}</p>
            <p>{textAv.parafraph2}</p>
          </div>
        </div>
      ))}

      {pricesData.map((section, index) => (
        <div key={index} className="details-osim-3">
          <h3 className="title-osim-3">{section.title}</h3>
          <div className="descriere-osim-1">
            {section.items.map((item, subIndex) => (
              <p key={subIndex} className="text-price-osim">
                {item}
              </p>
            ))}
          </div>
        </div>
      ))}

      <Footer />
    </>
  );
}

export default Osim;
