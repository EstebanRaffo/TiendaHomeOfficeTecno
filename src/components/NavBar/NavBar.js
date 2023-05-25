import CartWidget from "../CartWidget/CartWidget";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {

  const styles = {
    padding: "1.5%",
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
              <NavDropdown.Item as={Link} to="/category/homeoffice">Home Office</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/homeoffice">Kits Home Office</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/homeoffice">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar productos..."
              className="me-2"
              aria-label="Search"
            />
          </Form>
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


