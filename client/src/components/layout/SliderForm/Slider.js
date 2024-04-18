import { Link } from "react-router-dom";
import "./Slider.scss";

const Slider = () => {
  return (
    <div className="slider">
      <div className="col-4 invation-container text-center">
        <div className="text-box">
          <div className="invation col">
            <p>Zapraszamy do kontaktu</p>
          </div>
          <div className="name col">
            <p>Hodowla Perłowy Świt</p>
          </div>
          <div className="owner col">
            <p>Kenel Club</p>
          </div>
          <div className="link-contact col">
            <Link to="/kontakt" className="link-btn">
              Skontaktuj się z nami
            </Link>
          </div>
        </div>
      </div>
      <div className="col-8"></div>
    </div>
  );
};

export default Slider;
