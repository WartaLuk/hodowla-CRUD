import ContactForm from "../ContactForm/ContactForm";
import MainMenu from "../MainMenu.js/MainMenu";

const MainLayout = ({ children }) => (
  <div>
    <MainMenu/>
    {children}
    <ContactForm/>
  </div>
);

export default MainLayout;
