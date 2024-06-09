import React from 'react'
import TopBar from './Topbar'
import SidBar from './Sidbar'
// import ListAgency from '../ListAgency'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <TopBar/>
      <div>
      <SidBar/>
      <Outlet/>
      </div>
               
        
    </div>
  )
}
