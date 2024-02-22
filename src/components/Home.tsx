import Business from "./Business";
import Tarife from "./Tarife";
import Template from "./Template";

function Home() {
  return (
    <div className="App">
      <Template />
      <Tarife />
      <Business />
    </div>
  );
}

export default Home;
