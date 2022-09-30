import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import Image from 'next/image'
import { useStateContext} from '../context/StateContext';
import {Logo} from '../assets/LOGOTOP.png';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      {/* <p className="logo">
        <Link href="/">Waitik</Link>
      </p> */}
       <nav className="relative container mx-auto p-6">
    <div className="flex items-center justify-between">
      <div className="pt-2">
        <Image src={Logo} alt="" width="80" height="80" />
      </div>
     
      <div class="hidden space-x-6 md:flex">
        <a href="/furniture" className="hover:text-darkPink">Furnitures</a>
        <a href="/doors"className="hover:text-darkPink">Doors</a>
        <a href="#" className="hover:text-darkPink">Door Frames</a>
        <a href="#" className="hover:text-darkPink">Wooden Tiles</a>
      </div>
     
      <a href="#" class="hidden  p-3 px-6 pt-2 text-white bg-darkPink rounded-full baseline hover:bg-purple md:block">Get Started</a>

    <button id="menu-btn" class="block hamburger md:hidden focus:outline-none">
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button> 
    </div>

    <div className="md:hidden">
      <div id="menu"
      className="absolute flex-col items-center hidden self-end py-8
       mt-10 space-y-6 font-bold bg-lightBrown sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
       <a href="#" className="hover:text-darkPink">Home</a>
        <a href="#" className="hover:text-darkPink">Furnitures</a>
        <a href="#" className="hover:text-darkPink">Doors</a>
        <a href="#" className="hover:text-darkPink">Door Frames</a>
        <a href="#" className="hover:text-darkPink">Wooden Tiles</a>
      </div>
    </div>
    </nav>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar