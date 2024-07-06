import React from 'react'

import { Outlet } from 'react-router-dom'
import SideBar from '../../component/SideBar'


export default function Dashboard() {
  return (
    <SideBar>
      <Outlet/>
      </SideBar>
  )
}


