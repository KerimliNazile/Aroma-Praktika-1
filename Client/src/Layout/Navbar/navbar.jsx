import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { TfiShoppingCart } from "react-icons/tfi";
import './navbar.scss'
const Navbar = () => {
  return (
    <>
    <nav>
        <div className="Navbar">
            <div className="NavAroma">
                <img src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp" alt="" />
            </div>
            <div className="NavPages">
                <ul className='MainNav'>
                    <li><NavLink to={"/home"}>Home</NavLink></li>
                    
                    <li><NavLink to={"/shop"}>Shop</NavLink></li>
                    <li><NavLink to={"/blog"}>Blog</NavLink></li>
                    <li><NavLink to={"/pages"}>Pages</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                </ul>
            </div>
            <div className="NavIcons">
            <CiSearch />
            <TfiShoppingCart />
            </div>
            <div className="NavBuyNow">
                <button className='NavBtn'>Buy Now</button>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
