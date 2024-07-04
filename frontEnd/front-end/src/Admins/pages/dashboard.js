import React from 'react'
import TopBar from '../dashboard/TopBar'
import SidBar from '../dashboard/SideBar'
import { Outlet } from 'react-router-dom'
import SideBar from '../../component/SideBar'


export default function Dashboard() {
  return (
    <SideBar>
      <Outlet/>
      </SideBar>
  )
}


