import CartWidget from "../CartWidget/CartWidget";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";


const NavBar = () => {

  const styles = {
    paddingLeft: "2%",
    paddingRight: "2%"
  } 
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={styles}>
      <NavLink to="/"><Navbar.Brand>Tienda Tecno&HomeOffice</Navbar.Brand></NavLink>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink to="/category/notebooks">Notebooks</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/category/tablets">Tablets</NavLink></Nav.Link>
            <NavDropdown title="HomeOffice" id="collasible-nav-dropdown">
              <NavDropdown.Item><NavLink to="/category/homeoffice">Home Office</NavLink></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Kits Home Office</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
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


