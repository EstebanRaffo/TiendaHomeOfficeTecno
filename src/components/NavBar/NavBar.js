import CartWidget from "../CartWidget/CartWidget";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Tienda TecnoHomeOffice</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Notebooks</Nav.Link>
            <Nav.Link href="#pricing">Tablets</Nav.Link>
            <NavDropdown title="HomeOffice" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Desktop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Kits Home Office
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Standing Desk</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
    )
};

export default NavBar;


