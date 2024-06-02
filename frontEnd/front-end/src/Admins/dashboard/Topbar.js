import React from 'react'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <div className='top-bar'>
        <h1>Store</h1>
        <Link to={"/"} >Go To WebSite</Link>
    </div>
  )
}
