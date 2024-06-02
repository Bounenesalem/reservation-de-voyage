import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"
import {Link} from "react-router-dom"

function Header()
{
  
    return(
        <div> 
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Reservation De Voyage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " >
          
            
              <Link to="/" className="mx-3">Home</Link>            
             <Link to="/about" className="mx-3">About</Link>            
             <Link to="/contact" className="mx-3">Contact</Link>
             
             
              
             
                       
                   
          </Nav>
        </Navbar.Collapse>
        <Nav>
          
          <NavDropdown title="Login">
            <NavDropdown.Item>
            <Link to="/users" className="mx-3">Login</Link>
           <Link to="/users" className="mx-3">Register</Link> 
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
        </div>
    ) 
}
export default Header