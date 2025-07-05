import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Navbar() {
  return (
    <div className='navbar border'>
        <div className='ms-4 navbar-brand'>tharanes</div>
        <Link to="/login" className='btn btn-primary btn-lg m-3' >login</Link>
    </div>
  )
}

export default Navbar