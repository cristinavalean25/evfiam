import Business from "./Business";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Tarife from "./Tarife";
import Template from "./Template";
import TopNavbar from "./TopNavbar";

function Home() {
  return (
    <div className="App">
      <TopNavbar />
      <Navbar />
      <Template />
      <Tarife />
      <Business />
      <Footer />
    </div>
  );
}

export default Home;
