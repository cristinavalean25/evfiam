import "../CssPages/AutorizatiiFirma.css";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import img1 from "../images/pexels-tima-miroshnichenko-6694543.jpg";
import { motion } from "framer-motion";
import Footer from "./Footer";

const contentData = [
  {
    title: "Autorizația de Funcționare ",
    paragraphs: [
      "Autorizația de Funcționare este documentul oficial emis de autoritatea locală competentă care îi permite beneficiarului să desfășoare activități de alimentație publică într-un anumit spațiu aflat în raza de competență a autorității locale emitente, sub condiția îndeplinirii anumitor obligații legale. Acestea sunt emise în baza unor metodologii adoptate prin hotărâri de consiliu local, astfel că, în practică există diferențe de procedură de la o localitate la alta, sau de la un sector la altul. ",
    ],
  },
  {
    title: "Acordul de Funcționare ",
    paragraphs: [
      "Acordul de Funcționare este un document similar cu Autorizația de Funcționare, însă, spre deosebire de aceasta din urmă, Acordul de Funcționare îi permite beneficiarului să desfășoare activități de comerț și de prestări servicii într-un anumit spațiu aflat în raza de competență a autorității locale emitente, sub condiția îndeplinirii anumitor obligații legale",
      "Atât Autorizația de Funcționare, cât și Acordul de Funcționare pot fi obținute doar în baza unui dosar, ce trebuie depus la instituția competentă.",
      "Nerespectarea măsurii de încadrare în prevederile autorizaţiei de funcţionare se sancţionează cu amendă de  şi confiscarea bunurilor destinate, folosite sau obţinute din săvârşirea contravenţiei.",
      "În dosarul de autorizare, ce trebuie întocmit pentru primărie vor fi necesare o serie de documente:",
      "- Autorizaţie de la Direcția de Sănătate Publică sau negaţie ",
      "- Autorizație de la Direcţia Sanitar – Veterinară și pentru Siguranța Alimentelor sau negaţie",
      "- Autorizație de prevenire şi stingere a incendiilor sau negaţie (PSI) ",
      "- Autorizaţie de mediu sau negaţie - copie; ",
    ],
  },
];

const detailsCaen = {
  paragraphs: [
    "În situaţia în care se solicită emiterea acordului de funcţionare pentru un spaţiu în care se doreşte a se desfăşura activităţile încadrate în codurile CAEN: 5610- Restaurante, 5630- Baruri şi alte activităţi de servire a băuturilor, 5621- Activităţi de alimentaţie (catering) pentru evenimente, 5629-Alte activităţi de alimentaţie n.c.a, 4520- Întreţinerea şi repararea autovehiculelor",
  ],
  paragraphs2: [" PREȚURILE VOR  PUTEA SUFERII MODIFICĂRI"],
};

const taxSections = [
  {
    title: "Alte Taxe",
    items: [
      " ✔ Negații - 500 lei + TVA",
      " ✔ Acord de funcționare: 1000 lei TVA",
      " ✔ Autorizația de Funcționare: 2000 lei",
      " ✔ Nu include TAXE ȘI TARIFE ACHITATE CĂTRE INSTITUȚII:",
      " ✔ Taxe DSP - 400 lei",
      " ✔ Taxe DNSVSA - 375 lei",
      " ✔ Extras CF - 20 lei",
      " ✔ Ortofotoplan - 15 lei",
    ],
  },
  {
    title: "Taxe primărie",
    items: [
      "Autorizatie de funcționare – 50 lei",
      "A. Autorizatie de funcționare – 50 lei",
      "B. Autorizație alimentație publică - stabilită în funcție de suprafața unității de alimentație publică inclusiv terasele:",
      " ✔ Până la 25 mp - 180 lei",
      " ✔ Între 26 mp și 50 mp inclusiv - 616 lei",
      " ✔ Între 51 mp și 100 mp inclusiv - 923 lei",
      " ✔ Între 101 mp și 150 mp inclusiv - 1231 lei",
      " ✔ Între 151 mp și până la 300 mp inclusiv - 1847 lei",
      " ✔ Între 301 mp și până la 400 mp inclusiv - 1949 lei",
      " ✔ Între 401 mp și până la 500 mp - 2052 lei",
      " ✔ Între 501 mp și până la 700 mp - 2822 lei",
    ],
  },
];

function AutorizatiiFirma() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="autorizatii-container">
        <img src={img1} alt="Imagine autorizatii" />
      </div>

      <div className="auth-details">
        <div className="auth-80">
          {contentData.map((section, index) => (
            <motion.div key={index} className="text-auth-1">
              <h2 className="auth-title">
                <motion.h2
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2.5, delay: 1.5 }}
                >
                  {section.title}
                </motion.h2>
              </h2>
              <p className="text-auth">
                {section.paragraphs.map((paragraph, index) => (
                  <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.5, delay: 2 }}
                    key={index}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="auth-details-2">
        <h2 className="auth-title">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, delay: 0.5 }}
          >
            Tarife
          </motion.h2>
        </h2>

        <div className="auth-2">
          {taxSections.map((section, index) => (
            <div key={index} className="auth-80-2">
              <h3 className="auth-title">{section.title}</h3>
              {section.items.map((item, itemIndex) => (
                <p key={itemIndex} className="auth-title-2">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="auth-details">
        <div className="auth-80">
          {detailsCaen.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-auth" style={{ padding: "2%" }}>
              {paragraph} :{" "}
              <span style={{ color: "#ed1476", fontWeight: "bold" }}>
                {detailsCaen.paragraphs2[0]}
              </span>
            </p>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AutorizatiiFirma;
