import CartWidget from "../CartWidget/CartWidget";
import SearchBar from "../SearchBar/SearchBar";
import { Link, NavLink } from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


const NavBar = () => {

  const styles = {
    padding: "1.3%",
    paddingRight: "3%",
    paddingLeft: "3%"
  } 

  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={styles}>
      <NavLink className="navbar-brand" to="/">Tienda Tecno&HomeOffice</NavLink>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/notebooks">Notebooks</Nav.Link>
            <Nav.Link as={Link} to="/category/tablets">Tablets</Nav.Link>
            <NavDropdown title="HomeOffice" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/homeoffice">HomeOffice</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/homeoffice">Kits HomeOffice</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/homeoffice">
                Más productos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <SearchBar/>
          <Nav>
            <Nav.Link href="#deets">Mis compras</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Favoritos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  )
};

export default NavBar;


