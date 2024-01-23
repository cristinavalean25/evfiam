import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TopNavbar from "./components/TopNavbar";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import ModificaFirma from "./components/ModificaFirma";
import Srl from "./components/Srl";
import Pfa from "./components/Pfa";
import AutorizatiiFirma from "./components/AutorizatiiFirma";
import Osim from "./components/Osim";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TopNavbar" element={<TopNavbar />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/ModificaFirma" element={<ModificaFirma />} />
      <Route path="/Srl" element={<Srl />} />
      <Route path="/Pfa" element={<Pfa />} />
      <Route path="/AutorizatiiFirma" element={<AutorizatiiFirma />} />
      <Route path="/Osim" element={<Osim />} />
    </Routes>
  );
}

export default App;
