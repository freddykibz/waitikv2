import React from 'react'
import { client } from '../../lib/client';

import { Product, Category, HeroBanner, Door, Table } from '../../components';
const  Furniture = ({ products, bannerData , doors, tables }) => (
  <div className="flex flex-col w-full p-3 justify-center flex-wrap items-center md:flex-row">
    <HeroBanner heroBanner ={bannerData.length && bannerData.length && bannerData[0]}/>
    {console.log(bannerData)}
    
    <div className="flex-flex-col w-full md:flex-row">
    <div className="products-heading">
      <h2> Shop By Category </h2>
      <p>Speakers of many variations</p>
    </div>
    <Category/>
    
   <div  className="flex-flex-col w-full md:flex-row">
    <div className="products-heading">
    <h2>Cabinets</h2>
    </div>
    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
   </div>
    
   
    
    <div className="flex-flex-col w-full md:flex-row">
    
    <div className="products-heading">
    <h2>Doors</h2>
    </div>
    <div className="products-container">
      {doors?.map((door) => <Door key={door._id} door={door} />)}
    </div>
    </div>
    </div>
    </div>
   
    
  );
  export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
   
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    const doorQuery ='*[_type == "door"]';
    const doors = await client.fetch(doorQuery);

    const tableQuery ='*[_type == "table"]';
    const tables = await client.fetch(tableQuery);


    return { 
         props:{ products, bannerData,doors,tables }
    }
  }
  

export default  Furniture;