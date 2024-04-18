import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="contact">
      <div className="contact-form">
        <h1 className="text-center">Dane kontaktowe</h1>
        <div className="text-center">
          <p className="contact-link">
            My mail:{" "}
            <a
              href="mailto:przykladowy.mail@email.com"
              target="_blank"
              rel="noreferrer"
            >
              przykladowy.mail@email.com
            </a>
            <br />
          </p>
          <p className="contact-link">
            Nasz numer komórkowy:{" "}
            <a href="tel:+48600571533" target="_self" rel="noreferrer">
              +48 600 571 533
            </a>
          </p>
        </div>
        <h1 className="text-center form-title">Napisz do nas</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Imię</label>
            <input
              type="name"
              name="name"
              className="form-control"
              id="name"
              placeholder="Wpisz swoje imię"
            />
          </div>

          <div className="form-group nazwisko">
            <label htmlFor="email">Nazwisko</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Wpisz swoje nazwisko"
            />
          </div>

          <div className="form-group subject">
            <label htmlFor="subject">Tytuł</label>
            <input
              type="text"
              name="subject"
              className="form-control"
              id="subject"
              placeholder="Wpisz tytuł wiadomości"
            />
          </div>

          <div className="form-group message">
            <label className="message-label" htmlFor="email_body">
              Wiadomość
            </label>
            <textarea
              className="form-control"
              id="email_body"
              rows="6"
              placeholder="Wpisz tekst wiadomości"
            ></textarea>
          </div>

          <button type="submit">Wyślij</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
