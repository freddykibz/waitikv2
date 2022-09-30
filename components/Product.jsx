import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client'


const Product = ({ product: {image, name, slug, price, setting, wood} }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
      <div className ="product-card">
        <div className="flex flex-col w">
        <img src={urlFor(image && image[0])}
           width={250}
           height={250}
           className="product-image"
        />
        </div>
        
        <p className="product-name">{name}</p>
        <p className="product-price">Ksh{price}</p>
        <p className="product-name"><strong>Category</strong> {setting}</p>
        <p className="product-name"> <strong>Wood:</strong> {wood} </p>
      </div>
      </Link>
    </div>
  )
}
export default Product