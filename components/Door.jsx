import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client'


const Door = ({ door: {image, name, series, description,category,functionality, wood, price,width,height,weight,discount,slug} }) => {
  return (
    <div>
      <Link href={`/doors/${slug.current}`}>
        
      <div className ="product-card">
        <img src={urlFor(image && image[0])}
           width={250}
           height={250}
           className="product-image"
        />
        <p className="product-name">{name}</p>
        <p className="product-name">{series}</p>
        <p className="product-price">Ksh{price}</p>
        <p className="product-name"> <strong>Wood:</strong> {wood} </p>
      </div>
      </Link>
    </div>
  )
}
export default Door;