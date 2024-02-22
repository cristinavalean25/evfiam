import "../CssPages/AutorizatiiFirma.css";
import img1 from "../images/pexels-tima-miroshnichenko-6694543.jpg";
import { motion } from "framer-motion";
import { details } from "../components/details";

function AutorizatiiFirma() {
  const { contentData, detailsCaen, taxSections } = details;
  return (
    <>
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
              {paragraph}:{" "}
              <span style={{ color: "#ed1476", fontWeight: "bold" }}>
                {detailsCaen.additionalNote}
              </span>
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default AutorizatiiFirma;
