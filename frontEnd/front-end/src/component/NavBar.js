import "./navbar.css"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {

    //  state={clicked:false};
    const [clicked,setClicked]=useState(false);

    function handleClick(){
      // this.setState({clicked: !this.state.clicked})
      setClicked(!clicked);

    };

  return (
    <nav className='navbarItems'>
    <h1 className='navbar-logo'>Trippy</h1>

    <div className="menu-icons" onClick={handleClick}>
      <i className={clicked ? "fas fa-times":"fas fa-bars"}></i>
    </div>

    {/* <div className="menu-icons"></div> */}
    <ul className='nav-menu'>
        <li className='nav-menu' >
            <Link to={"/"} className="nav-link" > <i class="fa-solid fa-house-user"></i>Home</Link>
            </li>
            <li className='nav-menu' >
            <Link to={"about"} className="nav-link"><i class="fa-solid fa-circle-info"></i>About</Link>
            </li>
            <li className='nav-menu' >
            <Link to={"service"} className="nav-link"><i class="fa-solid fa-briefcase"></i>Service</Link>
            </li>
            <li className='nav-menu' >         
              
            <Link to={"contact"} className="nav-link"><i class="fa-solid fa-address-book"></i>Contact</Link>
            </li>
            <li className='nav-menu' >            

            <Link to={"signup"} className="sign">Sign Up</Link>
        </li>
        <button>Sign Up</button>
    </ul>
    </nav>
  )
}
