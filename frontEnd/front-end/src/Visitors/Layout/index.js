import { BrowserRouter,Route, Routes } from "react-router-dom"
// import Header from "../Header/index.js"
import Home from "../Home/index.js"
import About from "../About.js/index.js"
import Contact from "../Contact/index.js"
import Login from "../Login/index.js"
import Register from "../Register/index.js"
// import Dashboard from "../../Admins/dashboard/dashboard.js"


import Destination from "../../Admins/pages/destination/destination.js"
import TripsTable from "../../Admins/pages/trips/tripTable.js"
// import NavBar from "../../component/NavBar"
import UpdateAgency from "../../Admins/pages/agency/agencyUpdate.js"
import CreateAgency from "../../Admins/pages/agency/agencyCreate.js"

import Agencies from "../../Admins/pages/agency/agenciesList.js"
import CreateTrip from "../../Admins/pages/trips/tripCreate.js"

import AgencyDetailsPage from "../../Admins/pages/agency/agencyDetails.js"
import PageAgencies from "../../Admins/pages/agency/AgenciesAndTripsPage.js"
import DestinationList from "../../Admins/pages/destination/destinationList.js"
import UpdateDestination from "../../Admins/pages/destination/destinationUpdate.js"
import DestinationDetails from "../../Admins/pages/destination/destinationDetails.js"
import UpdateTrip from "../../Admins/pages/trips/tripUpdate.js"
import TripDetailsPage from "../../Admins/pages/trips/tripDetails.js"
// import AgenciesPage from "../../Users/selectAgency.js"
// import Bookings from "../../Users/Booking.js"
import UserList from "../../Admins/pages/user/userList.js"
import UserDetails from "../../Admins/pages/user/userDetails.js"
import UpdateUser from "../../Admins/pages/user/userUpdate.js"
import CreateUser from "../../Admins/pages/user/UserCreate.js"
// import BookingList from "../../Admins/pages/booking/bookingList.js"
// import BookingCreate from "../../Admins/pages/booking/bookingCreate.js"
import Users from "../../Users/index.js"
import BookingList from "../../Admins/pages/booking/bookingList.js"
import AdminPanel from "../../Admins/pages/admin.js"
import AdminBookings from "../../Users/AdminBooking.js"
import Dashboard from "../../Admins/pages/dashboard.js"
import HomeDashboard from "../../Admins/pages/HomeDashboard.js"






function Layout(){
    return(

    
 <BrowserRouter>
        
       
        {/* <SideBar> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} /> 
         
          

         

          <Route path='/dashboard' element={<Dashboard/>}>   
          <Route index element={<HomeDashboard />} /> 
            <Route path="agencyAndTrip" element={<PageAgencies/>}/> 
            <Route path='listAgency/create' element={<CreateAgency/>} />
            <Route  path='listAgency' element={<Agencies/>}/>           
            <Route path="listAgency/:id" element={<UpdateAgency/>}/>
            <Route path="listAgency/agency-details/:agencyId" element={<AgencyDetailsPage/>}/>

            <Route path="users" element={<UserList />} />
            <Route path="users/:id" element={<UserDetails />} />
            <Route path="users/create-user" element={<CreateUser/>} />
            <Route path="users/update-user/:id" element={<UpdateUser />} />

            
           
            <Route path="destinations" element={<DestinationList/>}/>
            <Route path="destinations/Create" element={<Destination/>}/>
            <Route path="destinations/:id" element={<UpdateDestination/>}/>
            <Route path="destinations/details/:destinationId" element={<DestinationDetails/>}/>

           
            <Route path="TripsTable" element={<TripsTable/>}/>
            <Route path="TripsTable/trip" element={<CreateTrip/>}/>
            <Route path="TripsTable/:id" element={<UpdateTrip/>}/>
            <Route path="TripsTable/trip-details/:id" element={<TripDetailsPage/>}/>

            <Route path="BookingsTable" element={<BookingList/>}/>
           
      
            </Route>

         
          <Route path='/users' element={<Users/>} />
          {/* <Route path="navbar" element={<NavBar/>}/> */}
          {/* <Route path="select" element={<AgenciesPage/>}/> */}
          {/* <Route path="book" element={<Bookings/>}/> */}
          <Route path="admin" element={<AdminPanel/>}/>
          <Route path="/adminBooking" element={<AdminBookings/>} />

          

          

         


          <Route path='/login' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
        </Routes>
        {/* </SideBar> */}
        </BrowserRouter>)
} 
export default Layout    