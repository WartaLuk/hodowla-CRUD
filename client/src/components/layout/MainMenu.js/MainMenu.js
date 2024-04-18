import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./MainMenu.scss";
const MainMenu = () => {
  return (
    <>
      <Navbar className="nav-bar position-fixed">
        <NavbarBrand href="/" className="nav-brand">
          <h4>Perłowy Świt</h4>
          <h6>Kenel Club</h6>
        </NavbarBrand>
        <Nav className="nav-btns .align-content-center">
          <NavItem>
            <NavLink className="nav-btn" href="/">
              <h4>Strona Główna</h4>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-btn" href="/o-nas">
              <h4>O nas</h4>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-btn" href="/nasze-psy">
              <h4>Nasze psy</h4>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-btn" href="/nasze-szczeniaki">
              <h4>Nasze szczeniaki</h4>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-btn" href="/kontakt">
              <h4>Kontakt</h4>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-btn"
              href="https://www.facebook.com/profile.php?id=100067437939269"
            >
              <a
                className="nav-btn"
                href="https://www.facebook.com/profile.php?id=100067437939269"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Nasz Facebook</h4>
              </a>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default MainMenu;
