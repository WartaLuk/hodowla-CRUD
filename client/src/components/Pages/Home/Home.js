import Slider from "../../layout/SliderForm/Slider";

import "./Home.scss";

import image1 from "../../../img/1001.jpg";
import image2 from "../../../img/1002.jpg";
import image3 from "../../../img/1003.jpg";
import FacebookIframe from "../../layout/FacebookIframe/FacebookIframe";

const Home = () => {
  return (
    <div className="home-page">
      <Slider />
      <div className="col-12">
        <div className="about-us">
          <h2 className="about-title text-center">Perłowy świt</h2>
          <h4 className="about-subtitle text-center">Hodowla z pasji</h4>
          <p className="about-text text-center">
            Hodowla "Perłowy Świt" to mała, ale pełna pasji hodowla psów,
            członek prestiżowego Kenel Clubu. Naszym głównym celem jest hodowla
            z miłości i pasji do tych wyjątkowych zwierząt. W naszym domu
            mieszka jeden pies i trzy suki, z którymi żyjemy w bliskiej,
            rodzinnej relacji. Każdy z naszych psów jest traktowany jak
            pełnoprawny członek rodziny, co pozwala im rozwijać się w kochającej
            i wspierającej atmosferze. W "Perłowym Świcie" stawiamy na jakość i
            dobrostan naszych czworonożnych przyjaciół, co czyni naszą hodowlę
            wyjątkowym miejscem.
            <a href="/o-nas">dowiedz się więcej</a>
          </p>
        </div>
        <div className="about-race">
          <h2 className="about-title text-center">
            Dlaczego warto wybrać psa rasy hawańczyk
          </h2>
          <h4 className="about-subtitle text-center">Psy pełne miłości</h4>
          <p className="about-text text-center">
            Wybór psa rasy hawańczyk to decyzja, która przyniesie wiele radości
            i pozytywnych emocji do Twojego życia. Oto kilka powodów, dla
            których warto rozważyć hawańczyka jako nowego członka rodziny:
          </p>
          <div className="race-box justify-content-center align-items-center row text-justify">
            <div className="box col-4">
              <p>
                <img src={image1} alt="obraz" />
                <h3>
                  <span>Towarzyski charakter:</span>
                </h3>

                <span>
                  Hawańczyki są niezwykle przyjazne i uwielbiają towarzystwo
                  ludzi. Są znane z tego, że świetnie dogadują się z dziećmi
                  oraz innymi zwierzętami, co czyni je idealnym wyborem dla
                  rodzin. Ich towarzyska natura sprawia, że są doskonałymi
                  kompanami, zarówno podczas aktywnego spędzania czasu, jak i
                  relaksu w domu.
                </span>
              </p>
            </div>
            <div className="box col-4">
              <p>
                <img src={image2} alt="obraz" />
                <h3>
                  <span>Niewielkie rozmiary:</span>
                </h3>

                <span>
                  Niewielkie rozmiary: Jako małe psy, hawańczyki są idealne dla
                  osób mieszkających w mieszkaniach lub domach z ograniczoną
                  przestrzenią. Ich rozmiar sprawia, że są łatwe do zabrania w
                  podróż, co pozwala na częste dzielenie się z nimi przygodami
                  poza domem.
                </span>
              </p>
            </div>
            <div className="box col-4">
              <p>
                <img src={image1} alt="obraz" />
                <h3>
                  <span>Niska utrata sierści:</span>
                </h3>

                <span>
                  Hawańczyki są często polecane dla alergików, ponieważ mają
                  tendencję do minimalnej utraty sierści. Ich unikalna sierść
                  wymaga regularnej pielęgnacji, ale dzięki temu są jedną z
                  bardziej hipoalergicznych ras, co jest dużą zaletą dla osób
                  wrażliwych na alergeny.
                </span>
              </p>
            </div>
            <div className="box col-4">
              <p>
                <img src={image3} alt="obraz" />
                <h3>
                  <span>Inteligencja i łatwość szkolenia:</span>
                </h3>
                <span>
                  Inteligencja i łatwość szkolenia: Są to psy inteligentne i
                  chętne do nauki, co sprawia, że szkolenie i nauka nowych
                  trików mogą być zarówno efektywne, jak i przyjemne. Ich chęć
                  do zadowolenia właściciela i zdolności adaptacyjne czynią
                  proces szkolenia mniej skomplikowanym.
                </span>
              </p>
            </div>
            <div className="box col-4">
              <p>
                <img src={image2} alt="obraz" />
                <h3>
                  <span>Wspaniały temperament:</span>
                </h3>
                <span>
                  Hawańczyki są znane ze swojego radosnego i optymistycznego
                  usposobienia. Rzadko wykazują agresję, co czyni je przyjaznymi
                  i łagodnymi towarzyszami. Ich pozytywne nastawienie może być
                  zaraźliwe i przynieść wiele pozytywnej energii do domu.
                </span>
              </p>
            </div>
            <div className="box col-4">
              <p>
                <img src={image1} alt="obraz" />
                <h3>
                  <span>Długowieczność i zdrowie:</span>
                </h3>
                <span>
                  Z odpowiednią opieką, hawańczyki mogą cieszyć się długim i
                  zdrowym życiem. Ich długowieczność oznacza, że mogą być Twoimi
                  wiernymi towarzyszami przez wiele lat.
                </span>
              </p>
            </div>
          </div>
        </div>
        <FacebookIframe/>
      </div>
    </div>
  );
};

export default Home;
