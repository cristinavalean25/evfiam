import "../CssPages/AutorizatiiFirma.css";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import img1 from "../images/pexels-tima-miroshnichenko-6694543.jpg";
import { motion } from "framer-motion";
import Footer from "./Footer";

const contentData = [
  {
    title:
      "Care sunt avizele și autorizațiile necesare deschiderii unei firme?",
    paragraphs: [
      "Bine ai venit în lumea antreprenoriatului! La Efviam, suntem aici pentru a te ghida și sprijini în procesul complex al înființării unei firme. Înțelegem că acest demers implică nu doar curaj și entuziasm, ci și o atenție deosebită acordată detaliilor.",
      "Dacă membrii și capitalul nu reprezintă o problemă, următorul pas important este obținerea avizelor și autorizațiilor necesare pentru ca firma ta să funcționeze legal. Compania noastră oferă un pachet complet de servicii pentru înființarea unei firme, asigurându-ne că vei dispune de toate documentele necesare și vei îndeplini condițiile impuse de lege.",
    ],
  },
  {
    title: "Certificatul de Autorizare a Activității",
    paragraphs: [
      "Indiferent de specificul activității tale, obținerea unui certificat de autorizare a activității este esențială pentru legalitatea și eligibilitatea afacerii tale. Acest certificat include codurile CAEN (Clasificarea Activităților din Economia Națională), care identifică specificul domeniului tău de activitate. Evfiam oferă suport complet în acest proces, asigurându-se că vei primi aceste coduri esențiale. Iată cum decurge întregul demers:",
      "În prima fază, Evfiam îți oferă o consultare preliminară pentru a înțelege nevoile specifice ale afacerii tale. Această etapă include evaluarea domeniului de activitate, specificații legale și cerințele autorităților.",
      "Următorul pas constă în documentarea și îndeplinirea cerințelor pentru autorizare. Evfiam te va ghida în procesul de adunare a documentelor necesare, asigurându-se că îndeplinești toate cerințele legale.",
      "După documentare, Evfiam depune cererea pentru obținerea certificatului de autorizare la autoritățile competente. Acest proces include asigurarea conformității cu toate reglementările și normele în vigoare. O parte crucială a serviciilor oferite de Evfiam este obținerea și atribuirea codurilor CAEN specifice activității tale. Aceasta implică identificarea celor mai potrivite coduri CAEN în funcție de activitățile desfășurate.",
      "După obținerea certificatului și codurilor CAEN, Evfiam oferă servicii de monitorizare pentru a asigura respectarea normelor pe parcursul desfășurării afacerii tale. Totodată, se ocupă de actualizarea și adaptarea la eventuale schimbări legislative sau reglementări.",
      "Prin acest proces integral, Evfiam facilitează obținerea certificatului de autorizare și a codurilor CAEN, oferind suport în toate etapele pentru o desfășurare legală și conformă a afacerii tale.",
    ],
  },
  {
    title:
      "Documente Necesare pentru Autorizarea Activității la Registrul Comerțului",
    paragraphs: [
      "În colaborare cu noi, vei avea toate actele necesare pentru înregistrarea la Registrul Comerțului. Printre acestea se numără:",
      " ✔ Contract pentru Spațiu: Detalii complete ale locației unde se va afla firma, inclusiv datele de identificare ale proprietarilor.",
      " ✔ Contract de Închiriere: Vizat de Administrația Finanțelor Publice, necesar în cazul închirierii de la o persoană fizică sau juridică. Documentație suplimentară poate fi necesară în anumite situații.",
      " ✔ Hotărâre a Adunării Generale/Decizie Asociat Unic: Un document esențial pentru constituirea firmei.",
      " ✔ Delegație, Contract de Comodat, Adeverință de la Asociația de Proprietari: Documente suplimentare pentru diverse aspecte ale afacerii tale.",
    ],
  },
  {
    title: "Autorizații și Avize în Funcție de Obiectul de Activitate",
    paragraphs: [
      "Evfiam îți oferă suport în obținerea tuturor autorizațiilor și avizelor necesare, adaptate obiectului principal și secundar de activitate:",
      " ✔ Autorizație și Acord de Funcționare de la Primărie: Pentru activitățile cu spații fizice special dedicate.",
      " ✔ Autorizație Sanitară de la DSP și Sanitar Veterinar de la DSVP: Esențiale pentru activitățile din domeniul alimentar.",
      " ✔ Aviz Mediu: Pentru activitățile cu impact asupra mediului.",
      " ✔ Autorizație PSI: Protecție și Stingere Incendiilor, necesară pentru spații extinse și activități cu un număr mare de angajați.",
      " ✔ Autorizație de la ITM pentru Protecția Muncii: O cerință în cazul în care ai angajați.",
      " ✔ Avize specifice domeniului tău de activitate:",
    ],
  },
  {
    paragraphs: [
      "Cu Evfiam, intri în lumea antreprenoriatului cu încredere. Echipa noastră se dedică asigurării că demersul tău de înființare a firmei este un succes, punând la dispoziție soluții complete pentru a evita amenzi, sancțiuni și probleme care pot apărea pe parcurs.",
      "În parteneriat cu noi, procesul de înființare devine mai ușor. Ne concentrăm pe obținerea certificatului de autorizare a activității, inclusiv a codurilor CAEN esențiale pentru domeniul tău de activitate. Oferim mai mult decât servicii administrative standard; suntem alături de tine în fiecare etapă.",
      "Consultații preliminare, adunarea documentelor, depunerea cererilor și monitorizarea conformității sunt doar câteva aspecte din gama noastră completă de servicii. Evfiam nu doar simplifică procesul, ci și asigură că afacerea ta respectă întotdeauna reglementările legale.",
      "Apelează la noi pentru a-ți maximiza șansele de succes în lumea afacerilor. Cu Evfiam, nu doar că înființezi o firmă, ci creezi o fundație solidă pentru o experiență antreprenorială sigură și eficientă.",
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
        <motion.div
          className="title-auth"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5 }}
        >
          Autorizatii de infiintare
        </motion.div>
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
      <Footer />
    </>
  );
}

export default AutorizatiiFirma;
