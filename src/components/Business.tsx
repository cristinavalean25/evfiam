import "../CssPages/Business.css";
import { motion } from "framer-motion";
import img1 from "../images/image-png.png";
import { details } from "./details";

function Business() {
  const { businessText, businessDetails } = details;

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
          <p className="details-text-business">{businessText.text1}</p>
        </motion.div>

        <div className="details-div">
          {businessDetails.map((item, index) => (
            <div
              key={index}
              className={`subdiv-${item.number}`}
              style={{ backgroundImage: `url(${img1})` }}
            >
              <div className={`subdiv-${item.number}-details`}>
                <h2 className="number">{item.number}.</h2>
                <p className="sub-title">{item.title}</p>
                <p className="short-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Business;
