import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';  // Import the CSS file

function Header() {
  return (
    <div className="navbarItems"> 
      <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
        <Container>
          <Navbar.Brand href="#home" className="navbar-logo">Reservation De Voyage</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-menu"> {/* Changed class from ml-auto to ms-auto */}
              <Link to="/" className="nav-link">Home</Link>            
              <Link to="/about" className="nav-link">About</Link>            
              <Link to="/contact" className="nav-link">Contact</Link>
              <NavDropdown title="Login" id="basic-nav-dropdown" className="nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/users" className="dropdown-link">Login</Link> <br></br>
                
                  <Link to="/users" className="dropdown-link">Register</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;