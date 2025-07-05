import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
    <Navbar/>
    <div className='hero border'>
        <Link className='btn btn-danger' to="/accounts">manage accounts</Link>
    </div>
    </>
  )
}

export default Hero