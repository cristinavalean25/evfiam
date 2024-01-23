import { useNavigate } from "react-router-dom";
import "../CssPages/ModificaFirma.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";

function ModificaFirma() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Contact");
  };

  const services = [
    {
      title: "Schimbare sediu social",
      price: "550 Lei",
    },
    {
      title: "Prelungire sediu social",
      price: "400 Lei",
    },
    {
      title: "Adăugare / ștergere cod CAEN",
      price: "400 Lei",
    },
    {
      title: "Actualizare date ONRC",
      price: "250 Lei",
    },
    {
      title: "Schimbare cod CAEN principal",
      price: "550 Lei",
    },
    {
      title: "Actualizare act constitutiv",
      price: "550 Lei",
    },
    {
      title: "Deschidere punct de lucru",
      price: "400 Lei",
    },
    {
      title: "Majorare capital social",
      price: "550 Lei",
    },
    {
      title: "Schimbare administrator (adaugare/revocare)",
      price: "550 Lei",
    },
    {
      title: "Cesiune părți sociale",
      price: "550 Lei",
    },
    {
      title: "Închidere punct de lucru",
      price: "400 Lei",
    },
    {
      title: "Transformare SRL-D în SRL",
      price: "550 Lei",
    },
    {
      title: "Prelungire administrator",
      price: "550 Lei",
    },
    {
      title: "Prelungire punct de lucru",
      price: "400 Lei",
    },
    {
      title: "Reluare activitate firmă",
      price: "400 Lei",
    },
    {
      title: "Schimbare denumire firmă",
      price: "550 Lei",
    },
    {
      title: "Suspendare activitate firmă",
      price: "400 Lei",
    },
  ];

  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="title-service">
        <h1>Modifica usor orice aspect din firma ta</h1>
        <h4>Poti face oricate modificari doresti si platesti una singura</h4>
      </div>
      <div className="big-container">
        <div className="sevice-secound-container">
          <div className="services-container">
            {services.map((service, index) => (
              <div key={index} className="service-firma">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h5 className="title-details">{service.title}</h5>
                </div>
                <div>
                  <p className="text-price">{service.price}</p>
                  <button onClick={handleButtonClick}>ÎNCEPE</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ModificaFirma;
