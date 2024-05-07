import { BrowserRouter,Route, Routes } from "react-router-dom"
import Header from "../Header/index.js"
import Home from "../Home/index.js"
import About from "../About.js/index.js"
import Contact from "../Contact/index.js"
import Login from "../Login/index.js"
import Register from "../Register/index.js"
import Users from "../../Users/index.js"
import Agency from "../../Admins/pages/agency.js"
import Trip from "../../Admins/pages/trip.js"
import Destination from "../../Admins/pages/destination.js"
import Booking from "../../Admins/pages/booking.js"



function Layout(){
    return(
    
    <BrowserRouter>
        <Header/>
       
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/agency' element={<Agency/>} />
          <Route path='/trip' element={<Trip/>} />
          <Route path='/destination' element={<Destination/>} />
          <Route path='/booking' element={<Booking/>} />


          <Route path='/login' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
        </Routes>
        </BrowserRouter>)
}
export default Layout