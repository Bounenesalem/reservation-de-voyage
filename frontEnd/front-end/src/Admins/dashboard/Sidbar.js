import React from 'react'
import { Link } from 'react-router-dom'


export default function Sidbar() {
  return (
    <div  className='side-bar'>

        <Link to={"/dashboard/listAgency"} className="mx-3">ListAgency</Link>
        <Link to={"/dashboard/destinations"} className="mx-3">List Destination</Link>        
        <Link to={"/dashboard/tripsTable"} className="mx-3">TripsTable</Link>
        <Link to={"/dashboard/agencyAndTrip"} className="mx-3">Agencies & Trips</Link>
        <Link to={"/dashboard/users"} className="mx-3">List Users </Link>
        <Link to={"/dashboard/bookings"} className="mx-3">Bookings</Link>

        

    </div>
  )
}
