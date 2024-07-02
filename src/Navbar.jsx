import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './Navbar.css'
import logo from './assets/products/online-shop.png'

function Navbar() {
    return (
        <div className="navbar flex justify-between bg-black py-2 px-5">
            <div className="logo w-16 ps-2"><Link to={"/"}><img src={logo} alt="" /></Link></div>
            <div className="links">
                <Link to={'/'}>Shop</Link>
                <Link to={'/cart'}><ShoppingCart size={32} /></Link>
            </div>
        </div>
    )
}

export default Navbar