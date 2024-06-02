import React from 'react'
import TopBar from './TopBar'
import SidBar from './SidBar'
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
