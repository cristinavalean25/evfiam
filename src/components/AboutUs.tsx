import "../CssPages/AboutUs.css";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import imgBusiness from "../images/business.jpg";
import Footer from "./Footer";

function AboutUs() {
  const descriere = [
    {
      title: "Despre noi",
      paragraphs: [
        "În lumea afacerilor, Evfiam se evidențiază prin pragmatism și abordare realistă. Specializându-se în inființarea de firme, modificări de registru și înregistrări OSIM, compania devine un partener de încredere pentru antreprenorii dornici să-și construiască și să-și dezvolte afacerile.",
        "Fiecare proiect este tratat cu seriozitate și competență, iar echipa Evfiam oferă suport pe măsură în toate etapele acestora. Înființarea unei noi firme devine un proces simplificat, iar Evfiam se implică activ pentru a asigura că toate aspectele legale și administrative sunt gestionate eficient.",
        "Modificările de registru sunt abordate cu profesionalism, fiecare ajustare fiind făcută în concordanță cu schimbările necesare în evoluția afacerii. Evfiam înțelege importanța adaptării și își propune să faciliteze aceste procese pentru clienții săi.",
      ],
      paragraphs2: [
        "Înregistrările la OSIM devin o necesitate pentru protejarea proprietății intelectuale, iar Evfiam devine partenerul de încredere care ghidează clienții prin complexitatea acestui demers. Cu expertiza lor, membrii echipei se asigură că ideile și inovațiile sunt protejate în mod corespunzător.",
        "Evfiam nu oferă doar servicii, ci devine un catalizator pentru succesul afacerilor clienților săi. Ei înțeleg că fiecare detaliu contează și că pragmatismul este cheia pentru a construi și a consolida afaceri durabile.",
      ],
      paragraphs3: [
        "Într-o lume în continuă schimbare, Evfiam reprezintă o ancoră stabilă, oferind soluții concrete și sprijin pragmatic pentru toți cei care își doresc să navigheze cu succes în lumea complexă a afacerilor. Evfiam - partenerul dumneavoastră realist pentru un succes durabil.",
      ],
    },
  ];
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
        {descriere.map((section, index) => (
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
