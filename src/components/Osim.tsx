import "../CssPages/Osim.css";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import img from "../images/px.jpg";
import people from "../images/pp.png";
import clock from "../images/clock.png";
import asis from "../images/asistenta-juridica.png";
import Footer from "./Footer";

function Osim() {
  const pricesData = [
    {
      title:
        "Costul înregistrării unei mărci la OSIM presupune plata unor taxe oficiale OSIM și a unui onorariu profesional. Oferta noastră (toate onorariile și taxele sunt incluse):",
      items: [
        "✓ marcă verbală = 700 de Lei (+ taxe OSIM )",
        "✓ marcă logo alb-negru = 700 de Lei (+ taxe OSIM)",
        "✓ marcă color = 700 de Lei (+ taxe OSIM)",
      ],
    },
    {
      title: "Taxele OSIM pentru inregistrarea unei marci sunt:",
      items: [
        "Taxa depunere si publicare cerere marca:",
        " ✓ 197 lei pentru varianta de marca verbala sau alb-negru;",
        " ✓ 544 lei pentru varianta de marca color;",
        ,
        "Taxa examinare marca:",
        " ✓ 544 lei pentru varianta de marca verbala sau alb-negru;",
        " ✓ 940 lei pentru varianta de marca color;",
        " ✓ 148 lei daca marca are si element figurativ/grafica;",
        " ✓ 247 lei pentru fiecare clasa de produse/servicii suplimentara;",
        ,
        "Taxa eliberare certificat inregistrare marca:",
        " ✓ 247 lei.",
      ],
    },
  ];
  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="container-osim">
        <div className="inner-container">
          <img src={img} alt="Background" />
          <div className="text-container-osim">
            <h1 className="title-osim"> Inregistreaza acum marca ta!</h1>
            <p className="main-text">
              * Oferta Unica, 700 lei onorariu complet pentru inregistrare
              nationala si 1200 lei marca europeana.
            </p>
            <p className="main-text-1">
              * Se adauga taxele oficiale OSIM/EUIPO
            </p>
          </div>
        </div>
      </div>

      <div className="osim-details">
        <div>
          <h2 className="title-osim-3">De ce noi?</h2>
        </div>
        <div className="osim-details-2">
          <div className="gradient-div">
            <img src={people} className="img-osim" />
            <div className="text-container-details">
              <h3 className="title-gradient">Garantam cele mai bune tarife</h3>
              <div className="line-osim"></div>
            </div>
          </div>

          <div className="gradient-div">
            <img src={asis} className="img-osim" />
            <div className="text-container-details">
              <h3 className="title-gradient">Oferim consultanta gratuit</h3>
              <div className="line-osim"></div>
            </div>
          </div>

          <div className="gradient-div">
            <img src={clock} className="img-osim" />
            <div className="text-container-details">
              <h3 className="title-gradient">
                Evaluam sansele de inregistrare
              </h3>
              <div className="line-osim"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="osim-details">
        <div className="osim-details-2">
          <div className="details-osim-2">
            <h3 className="title-osim-3">
              De ce este important sa va inregistrati marca
            </h3>
            <div className="descriere-osim">
              <p>
                Firmele, în special cele mici și mijlocii sau cele proaspăt
                înființate, adesea omit să-și înregistreze propria marcă
                comercială. . Unul dintre motivele principale constă în
                înțelegerea greșită a faptului că înregistrarea la registrul
                comerțului sau achiziționarea unui nume de domeniu ar fi
                suficiente pentru a împiedica concurența să folosească aceeași
                denumire.
              </p>
              <p>
                În plus, multe companii percep procesul de înregistrare ca pe o
                cheltuială pe care o pot amâna. Înregistrarea unei mărci
                comerciale reprezintă de fapt o investiție, cu costuri relativ
                reduse comparativ cu nivelul de protecție pe care îl oferă celui
                mai valoros activ al acestora: marca proprie.
              </p>
            </div>
          </div>

          <div className="details-osim-2">
            <h3 className="title-osim-3">
              Necesitatea inregistrarii unei marci comerciale
            </h3>
            <div className="descriere-osim">
              <p>
                Inregistrarea unei mărci comerciale reprezintă un pas crucial
                pentru orice afacere care aspiră la recunoaștere și succes pe
                piață. Acest proces, desfășurat prin intermediul autorităților
                competente, conferă proprietarului drepturile exclusive asupra
                simbolului sau numelui de marcă. Prin înregistrare, se
                stabilește o barieră legală împotriva utilizării neautorizate a
                mărcii de către alte entități, oferind astfel o protecție vitală
                pentru investiția în identitatea și reputația brandului.
              </p>
              <p>
                Procedura de înregistrare, deși poate implica un efort
                administrativ, este o investiție pe termen lung. Aceasta nu doar
                consolidează poziția legală a brandului, ci și facilitează
                construirea unei imagini consistente și încrederea
                consumatorilor. Astfel, înregistrarea mărcii comerciale nu este
                doar o formalitate, ci o mișcare strategică esențială pentru
                succesul durabil al unei afaceri.
              </p>
            </div>
          </div>
        </div>

        <div className="details-osim-3">
          <h3 className="title-osim-3">Avantajele inregistrarii marcii</h3>
          <div className="descriere-osim-1">
            <p>
              Înregistrarea unei mărci la OSIM (Oficiul de Stat pentru Invenții
              și Mărci) aduce numeroase avantaje pentru orice entitate
              comercială. Prin acest demers, se obțin drepturi exclusive asupra
              mărcii, conferindu-i proprietarului controlul asupra utilizării
              acesteia în activitatea comercială. Această exclusivitate
              protejează brandul împotriva copierii sau utilizării neautorizate
              de către concurenți.
            </p>
            <p>
              O altă utilitate a înregistrării la OSIM constă în facilitarea
              proceselor legale. În cazul unui litigiu sau dispute privind
              mărcile, deținătorii de mărci înregistrate au o bază legală solidă
              pentru a-și proteja drepturile. OSIM oferă, de asemenea, o
              platformă oficială pentru confirmarea și validarea drepturilor de
              proprietate intelectuală, contribuind la consolidarea poziției
              brandului în peisajul comercial.
            </p>
            <p>
              Pe lângă aceste aspecte, înregistrarea mărcii la OSIM reprezintă o
              investiție în reputație și încrederea consumatorilor. Acest proces
              oficial oferă un cadru recunoscut și respectat, construind o
              fundație solidă pentru succesul durabil al afacerii. În concluzie,
              înregistrarea mărcii la OSIM nu doar asigură protecție legală, ci
              și contribuie la consolidarea și promovarea eficientă a
              identității brandului pe piață.
            </p>
          </div>
        </div>

        {pricesData.map((section, index) => (
          <div key={index} className="details-osim-3">
            <h3 className="title-osim-3">{section.title}</h3>
            <div className="descriere-osim-1">
              {section.items.map((item, subIndex) => (
                <p key={subIndex} className="text-price-osim">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Osim;
