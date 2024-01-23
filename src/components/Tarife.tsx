import "../CssPages/Tarife.css";
import { motion } from "framer-motion";

function Tarife() {
  return (
    <div className="container-tarife">
      <motion.div
        className="tarife-continut"
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3.5, delay: 2.5 }}
      >
        <motion.div
          className="title-tarife"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3.5, delay: 3 }}
        >
          <h1 className="title">Tarife clare de la inceput</h1>
          <p className="details-text">
            Oferim servicii 100% online pentru a-ti incepe afacerea corect,
            rapid si fara griji
          </p>
        </motion.div>

        <div
          className="d-tx"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "1rem",
          }}
        >
          <motion.div className="row detalii-tarife">
            <motion.div className="col-md-5 left-container">
              <div className="left-inner-container">
                <h2>Deschide un SRL</h2>

                <h5 className="subtitle">
                  Beneficiezi de o procedură simplă și rapidă, fără grijile de
                  la ONRC.
                </h5>

                <ul className="custom-list">
                  <li>Reprezentare completă la Registrul Comerțului (ONRC)</li>
                  <li>Toate cererile și declarațiile</li>
                  <li>Rezervarea de denumire la ONRC</li>
                  <li>Actul Constitutiv și Contractul de închiriere/comodat</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="col-md-5 right-container">
              <div className="right-inner-container">
                <h2 className="price"> 748 RON</h2>
                <h5 className="additional-cost">+128 RON Monitorul Oficial</h5>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Tarife;
