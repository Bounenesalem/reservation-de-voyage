import React from 'react'
import Topbar from './Topbar'
import Sidbar from './Sidbar'
// import ListAgency from '../ListAgency'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <Topbar/>
      <div>
      <Sidbar/>
      <Outlet/>
      </div>
               
        
    </div>
  )
}
