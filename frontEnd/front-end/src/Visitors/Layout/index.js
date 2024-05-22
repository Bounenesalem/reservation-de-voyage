import { BrowserRouter,Route, Routes } from "react-router-dom"
// import Header from "../Header/index.js"
import Home from "../Home/index.js"
import About from "../About.js/index.js"
import Contact from "../Contact/index.js"
import Login from "../Login/index.js"
import Register from "../Register/index.js"
import Dashboard from "../../Admins/dashboard/dashboard.js"


import Destination from "../../Admins/pages/destination.js"
import TripsTable from "../../Admins/pages/tripTable.js"
import NavBar from "../../component/NavBar"
import UpdateAgency from "../../Admins/pages/agencyUpdate.js"
import CreateAgency from "../../Admins/pages/agencyCreate.js"
import Booking from "../../Admins/pages/booking.js"
import Agencies from "../../Admins/pages/agenciesList.js"
import CreateTrip from "../../Admins/pages/tripCreate.js"

import AgencyDetailsPage from "../../Admins/pages/agencyDetails.js"
import PageAgencies from "../../Admins/pages/AgenciesAndTripsPage.js"
import DestinationList from "../../Admins/pages/destinationList.js"
import UpdateDestination from "../../Admins/pages/destinationUpdate.js"
import DestinationDetails from "../../Admins/pages/destinationDetails.js"
import UpdateTrip from "../../Admins/pages/tripUpdate.js"
import TripDetailsPage from "../../Admins/pages/tripDetails.js"
import AgenciesPage from "../../Users/selectAgency.js"
import Bookings from "../../Users/booking.js"
// import User from "../../Admins/pages/user.js"




function Layout(){
    return(
    
    <BrowserRouter>
        
       
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} /> 

          <Route path='/dashboard' element={<Dashboard/>}>    
          <Route path="agencyAndTrip" element={<PageAgencies/>}/> 
          <Route path='listAgency/create' element={<CreateAgency/>} />
            <Route  path='listAgency' element={<Agencies/>}/>           
            <Route path="listAgency/:id" element={<UpdateAgency/>}/>
           <Route path="listAgency/agency-details/:agencyId" element={<AgencyDetailsPage/>}/>


            <Route path="booking" element={<Booking/>}/>
           
            <Route path="destinations" element={<DestinationList/>}/>
            <Route path="destinations/Create" element={<Destination/>}/>
            <Route path="destinations/:id" element={<UpdateDestination/>}/>
            <Route path="destinations/details/:destinationId" element={<DestinationDetails/>}/>

           
            <Route path="TripsTable" element={<TripsTable/>}/>
            <Route path="TripsTable/trip" element={<CreateTrip/>}/>
            <Route path="TripsTable/:id" element={<UpdateTrip/>}/>
            <Route path="TripsTable/trip-details/:id" element={<TripDetailsPage/>}/>
           
      
            </Route>

         
          {/* <Route path='/users' element={<User/>} /> */}
          <Route path="navbar" element={<NavBar/>}/>
          <Route path="select" element={<AgenciesPage/>}/>
          <Route path="book" element={<Bookings/>}/>

         


          <Route path='/login' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
        </Routes>
        </BrowserRouter>)
}
export default Layout