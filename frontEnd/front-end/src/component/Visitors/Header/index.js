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
             
              
              <Link to="/users" className="mx-3">Users</Link> 
              
            
          
              <Link to="/agency" className="mx-3">Agency</Link>
             <Link to="/destination" className="mx-3">Destination</Link>
             <Link to="/trip" className="mx-3">Trip</Link>
             <Link to="/booking" className="mx-3">Booking</Link>
                       
                   
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <NavDropdown title="Login">
            <NavDropdown.Item></NavDropdown.Item>
          <Link to="/login" className="mx-3">Login</Link>
            <Link to="/register" className="mx-3">Register</Link> 
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
        </div>
    ) 
}
export default Header