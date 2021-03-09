import React from 'react'
import {Link} from 'gatsby'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default Navbar
