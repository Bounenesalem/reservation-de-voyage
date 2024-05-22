import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"
import {Link} from "react-router-dom"

function Header()
{
  function handleLogout(){
    window.localStorage.removeItem('email');
    window.location.pathname="/"
  }

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
            <NavDropdown.Item></NavDropdown.Item>
          {!window.localStorage.getItem('email') ? <><Link to="/login" className="mx-3">Login</Link>
            <Link to="/register" className="mx-3">Register</Link> </>:<div onClick={handleLogout}>logout</div>}
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
        </div>
    ) 
}
export default Header