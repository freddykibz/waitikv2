import React from 'react'
import Link from 'next/link';
import { urlFor } from  '../lib/client';

const DoorBanner = ({ doorBanner: {  discount, largeText1, largeText2, saleTime,desc, smallText, midText, product, buttonText,                              image }}) => {
  return (
    <div className="doors-banner-container">
      <div className ="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/door/${door}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img 
             src={urlFor(image)}
             width={300}
             height={200}
              className="footer-banner-image"
        />
      </div>
    </div>
  )
}
export default DoorBanner