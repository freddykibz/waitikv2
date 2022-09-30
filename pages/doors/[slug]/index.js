import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../../lib/client'
import { Door } from '../../../components';
import { useStateContext } from '../../../context/StateContext';

const DoorDetails = ({ door, doors }) => {
  const { image, name,series, description, price,width, height, weight } = door;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(door, qty);

    setShowCart(true);
  }

  return (
    <div className="flex flex-col w-full flex-wrap md:flex-row">
      <div className=" flex flex-col  w-full md:flex-row  product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className=" flex flex-col items-start  product-detail-desc">
          <h1>{name}</h1>
          <div className=" flex flex-col reviews">
            <div className="flex flex-row">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <div className="flex flex-col w-full md:flex-row ">
          <div className="flex flex-col  w-1/2 ">
          <p classname=""><strong>Name: </strong>{name}</p>
          <p classname=""><strong>series: </strong>{series}</p>
          <p classname=""><strong>Description: </strong>{description}</p>
          <p className="price"><strong>Price: </strong>${price}</p>
          </div>
         
          <div className="flex flex-col  w-1/2 items-spacearound md:ml-6 p-10">
          <p classname="flex flex-col"><strong>Width: </strong>{width}</p>
          <p classname="flex flex-col"><strong>height: </strong>{height}</p>
          <p classname="flex flex-col"><strong>Weight: </strong>{weight}</p>
          </div>
          </div>
          
          
         


          <div className=" flex flex-col  quantity">
            <h3>Quantity:</h3>
            <p className=" flex quantity-desc">
              <span className=" flex flex-col minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(door, qty)}>Add to Cart</button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-amber-200 w-full md:flex-row ">
        <h2 className="flex flex-col w-full justify-start bg-white md:flex-row">You may also like</h2> 
      </div>
      <div className=" flex flex-col w-full  md:flex-row  maylike-products-wrapper">
          <div className="marquee">
            <div className="maylike-products-container track">
              {doors.map((item) => (
                <Door key={item._id} door={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "door"] {
    slug {
      current
    }
  }
  `;

  const door = await client.fetch(query);

  const paths = door.map((door) => ({
    params: { 
      slug: door.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "door" && slug.current == '${slug}'][0]`;
  const doorsQuery = '*[_type == "door"]'
  
  const door= await client.fetch(query);
  const doors = await client.fetch(doorsQuery);
  return {
    props: { doors, door }
  }
}

export default DoorDetails