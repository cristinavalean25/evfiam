import { motion } from "framer-motion";
import "../CssPages/Template.css";
import { useNavigate } from "react-router-dom";

function Template() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Contact");
  };

  return (
    <div className="container-template">
      <motion.div
        className="center-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}
      >
        <motion.div
          className="text-container-template"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, delay: 3 }}
        >
          <h1 className="title-template">Deschide-ți</h1>
          <h1 className="title-template">SRL-ul</h1>
          <h1 className="title-template">100% online</h1>
        </motion.div>

        <motion.div className="details-container">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 4 }}
          >
            Acum este ușor să începi o afacere cu serviciile complete
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 4 }}
          >
            oferite de EVFIAM pentru antreprenorii
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 4 }}
          >
            {" "}
            aflați la început de drum.
          </motion.p>
        </motion.div>

        <motion.div
          className="container-list"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 5 }}
        >
          <ul>
            <li>Fara deplasari la Registrul Comertului</li>
            <li>Fara Birocratie</li>
            <li>Disponibil oriunde in tara</li>
          </ul>

          <motion.button
            className="button-start"
            onClick={handleButtonClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 6 }}
          >
            Sa Incepem
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Template;
