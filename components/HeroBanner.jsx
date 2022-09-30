import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client'
const HeroBanner = ({ heroBanner}) => {
  return (
    <div className=" flex flex-col mx-auto flex-wrap md:flex-row hero-banner-container">
      <div className="flex flex-col  flex-wrap">
        <div className="flex flex-col">
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        </div>
        
        <div className="flex flex-col">
          <div className="flex flex-col ">
          <img src={urlFor(heroBanner.image)} alt="Sofa" className=" flex flex-col flex-wrap  hero-banner-image"/>
          </div>
       
        
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
             <h5>Description</h5>
             <p>{heroBanner.desc}</p>
          </div>
        </div>
        </div>
       
        
      </div>
      </div>
  )
}
export default HeroBanner