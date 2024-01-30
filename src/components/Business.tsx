import "../CssPages/Business.css";
import { motion } from "framer-motion";
import img1 from "../images/image-png.png";

function Business() {
  return (
    <motion.div className="business-container">
      <motion.div
        className="business-2"
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3.5, delay: 2.5 }}
      >
        <motion.div
          className="title-tarife-business"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3.5, delay: 3 }}
        >
          <h1 className="title-business">
            Acum este ușor să deschizi o afacere
          </h1>
          <p className="details-text-business">
            Ne ocupam de toată partea grea de la Registrul Comerțului. Acum nu
            trebuie să te mai gândești la birocrație ci doar la denumirea
            afacerii tale pentru a începe.
          </p>
        </motion.div>

        <div className="details-div">
          <div className="subdiv-1" style={{ backgroundImage: `url(${img1})` }}>
            <div className="subdiv-1-details">
              <h2 className="number">1.</h2>
              <p className="sub-title">Discuta cu un consilier</p>
              <p className="short-description">
                Cu ajutorul nostru, procesul de deschidere a firmei devine
                simplu și eficient. Fără drumuri complicate la Registrul
                Comerțului, poți să-ți înregistrezi afacerea rapid și ușor.
                Deschide-ți firma acum și transformă visul tău în realitate!
              </p>
            </div>
          </div>

          <div className="subdiv-2" style={{ backgroundImage: `url(${img1})` }}>
            <div className="subdiv-2-details">
              <h2 className="number">2.</h2>
              <p className="sub-title">
                Îți verificăm identitatea și depunem dosarul la ONRC
              </p>
              <p className="short-description">
                Realizăm o scurtă verificare a identității pentru asociații și
                administratorii firmei, iar apoi depunem dosarul la Registrul
                Comerțului în baza împuternicirii notariale. Garantam un proces
                sigur și rapid.
              </p>
            </div>
          </div>

          <div className="subdiv-3" style={{ backgroundImage: `url(${img1})` }}>
            <div className="subdiv-3-details">
              <h2 className="number">3.</h2>
              <p className="sub-title">
                Primești certificatele firmei online semnate de ONRC
              </p>
              <p className="short-description">
                Dosarul tău este monitorizat constant de echipa noastră la
                Registrul Comerțului până la eliberarea actelor. Certificatele
                firmei au aplicate semnătura electronică calificată a ONRC.
              </p>
            </div>
          </div>
        </div>

        <div className="help">
          <h2 className="help-title">Te putem ajuta și cu</h2>
          <div className="service">
            <div className="sediu">
              <h4 className="package-title">Gazduire Sediu Social Sibiu</h4>
              <p className="price-block">Incepand de la </p>
              <p className="main-price">
                599 RON <span>/an</span>
              </p>
              <div className="line-business"></div>

              <div className="list-package">
                <ul>
                  <li>
                    <p className="title-list">100% Online</p>
                  </li>
                  <p>Toate contractele sunt încheiate de la distanță.</p>

                  <li>Posibilitate de prelungire după 12 luni</li>
                  <p>
                    Nu mai ești nevoit să schimbi sediul social al firmei în
                    fiecare an.
                  </p>

                  <li>Redirecționarea corespondenței primite</li>
                  <p>
                    Toată corespondența primită la adresa sediului social este
                    redirecționată la o adresă aleasă de tine.
                  </p>
                </ul>
              </div>
            </div>

            <div className="contabilitate">
              <h4 className="package-title">Contabilitate</h4>
              <p className="price-block">Incepand de la </p>
              <p className="main-price">
                200 RON + TVA <span>/luna</span>
              </p>
              <div className="line-business"></div>

              <div className="list-package">
                <ul>
                  <li>
                    <p className="title-list">100% Online</p>
                  </li>

                  <p>
                    Servicii de contabilitate completă oferite 100% digital prin
                    aplicațiile de iOS/Android sau de pe Web.
                  </p>

                  <li>Salarizare și evidență personal</li>
                  <p>
                    Gestionează toate aspectele salarizării personalului tău
                    într-un singur loc.
                  </p>

                  <li>Suport, Consultanță și Acces la Experți Contabili</li>
                  <p>
                    Înțelege rapid care este situația financiară a afacerii
                    tale. Toate documentele sunt expuse în limbaj
                    antreprenorial, nu contabil.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="additional-div">
          <div className="left-part">
            <h2 className="facturare">Facturare</h2>
            <div className="smart-bill-details">
              <img
                src={logo}
                alt="smart-bil-logo"
                className="smart-bill-logo"
              />
              <h4 className="smart-title">smartbill</h4>
            </div>

            <div className="smart-line"></div>

            <div className="smart-list">
              <ul style={{ marginLeft: "-15px" }}>
                <li>Integrare cu e-Factura</li>
                <li>Registru casa si evidenta cheltuielilor catre furnizor</li>
                <li>Conectare la casa de marcat</li>
              </ul>
            </div>
          </div>

          <div
            className="right-part"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="package-smart">
              <p className="text-facturare">
                „ Iar cei care dansau erau considerati nebuni de cei care nu
                puteau auzi muzica ”
              </p>
              <h3>Friedrich Nietzsche</h3>
            </div>
          </div>
        </div> */}
      </motion.div>
    </motion.div>
  );
}

export default Business;
