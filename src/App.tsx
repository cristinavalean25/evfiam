import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ModificaFirma from "./pages/ModificaFirma";
import Srl from "./pages/Srl";
import Pfa from "./pages/Pfa";
import AutorizatiiFirma from "./pages/AutorizatiiFirma";
import Osim from "./pages/Osim";
import Layout from "./pages/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/despre-noi" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/modifica-firma" element={<ModificaFirma />} />
        <Route path="/srl" element={<Srl />} />
        <Route path="/pfa" element={<Pfa />} />
        <Route path="/autorizatii-firma" element={<AutorizatiiFirma />} />
        <Route path="/osim" element={<Osim />} />
      </Routes>
    </Layout>
  );
}

export default App;
