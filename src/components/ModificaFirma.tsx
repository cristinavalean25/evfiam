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
      price: "500 Lei + TVA",
    },
    {
      title: "Prelungire sediu social",
      price: "300 Lei + TVA",
    },
    {
      title: "Adăugare / ștergere cod CAEN",
      price: "400 Lei + TVA",
    },
    {
      title: "Actualizare Asociați / Administrator",
      price: "300 Lei + TVA",
    },
    {
      title: "Schimbare cod CAEN principal",
      price: "500 Lei + TVA",
    },
    {
      title: "Actualizare act constitutiv",
      price: "550 Lei + TVA",
    },
    {
      title: "Deschidere punct de lucru",
      price: "300 Lei + TVA",
    },
    {
      title: "Majorare capital social",
      price: "700 Lei + TVA",
    },
    {
      title: "Schimbare administrator (adaugare/revocare)",
      price: "500 Lei + TVA",
    },
    {
      title: "Transfer de părți sociale",
      price: " 600 Lei + TVA ",
    },
    {
      title: "Închidere punct de lucru",
      price: "300 Lei + TVA",
    },
    {
      title: "Transformare SRL-D în SRL",
      price: "400 Lei + TVA",
    },
    {
      title: "Prelungire administrator",
      price: "400 Lei + TVA",
    },
    {
      title: "Prelungire punct de lucru",
      price: "400 Lei + TVA",
    },
    {
      title: "Reluare activitate firmă",
      price: "400 Lei + TVA",
    },
    {
      title: "Schimbare denumire firmă",
      price: "400 Lei + TVA",
    },
    {
      title: "Suspendare activitate firmă",
      price: "400 Lei + TVA",
    },
    {
      title: "Modificari Multiple ",
      price: "500 Lei + 100 lei + TVA fiecare modificare",
    },
  ];

  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="title-service">
        <h1>Modifica usor orice aspect din firma ta</h1>
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
