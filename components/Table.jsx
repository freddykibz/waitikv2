import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client'


const Table = ({ table: {image, name, series, description, price,category,wood, width,height, weight, discount, slug,isfeatured } }) => {
  return (
    <div>
      <Link href={`/tables/${slug.current}`}>
        
      <div className ="product-card">
        <img src={urlFor(image && image[0])}
           width={250}
           height={250}
           className="product-image"
        />
        <p className="product-name">{name}</p>
        <p className="product-name">{series}</p>
        <p className="product-name">{description}</p>

        <p className="product-price">Ksh{price}</p>
        <p className="product-name"> <strong>Wood:</strong> {wood} </p>
      </div>
      </Link>
    </div>
  )
}
export default Table;