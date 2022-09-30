import React from 'react';
import { AiFillInstagram, AiOutlineTwitter,AiOutlineFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="flex flex-col w-full bg-darkPink">
      {/* <p>2022 Waitik All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineFacebook/>
      </p> */}

<div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
 
         <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:items-start">
           <div className="mx-auto my-6 text-center text-white md:hidden">
            waitik  Copyright &copy; 2022, All Rights Reserved
           </div>
         
           <div>
             <img src="img/logo.svg" className="h-8" alt=""/>
           </div>
       
           <div className="flex justify-center space-x-4">
             
             <a href="#">
               <img src="img/icon-facebook.svg" alt="" className="h-8"/>
             </a>
             <a href="#">
              <img src="img/icon-instagram.svg" alt="" className="h-8"/>
            </a>
            <a href="#">
              <img src="img/icon-twitter.svg" alt="" className="h-8"/>
            </a>
            <a href="#">
              <img src="img/icon-youtube.svg" alt="" className="h-8"/>
            </a>
            <a href="#">
              <img src="img/icon-pinterest.svg" alt="" className="h-8"/>
            </a>
           </div> 
         </div>
         <div className="flex justify-around space-x-32">
           <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">Home</a>
            <a href="#" className="hover:text-brightRed">Furniture</a>
            <a href="#" className="hover:text-brightRed">Doors</a>
            <a href="#" className="hover:text-brightRed">About</a>
            
           </div>
           <div class="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">Delivery</a>
            <a href="#" className="hover:text-brightRed">Custom Designs</a>
            <a href="#" className="hover:text-brightRed">Support</a>
            <a href="#" className="hover:text-brightRed">Contact</a>
           </div>
         </div>
         <div className="flex flex-col justify-between">
           <form>
              <div className="flex space-x-3">
                <input type="text" 
                  class="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updated in your inbox"
                  />
                <button className="px-6 py-2 text-white rounded-full bg-purple hover:bg-midLightBrown focus:outline-none">
                  Go
                </button>
              </div>
           </form>
           <div className="hidden text-white md:block">
            waitik copyright &copy; 2022 ,All rights Reserved
           </div>

         </div> 
         <div>
    </div>
  </div>
</div>
  )
}

export default Footer