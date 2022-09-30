import React from 'react'
import { client } from '../../lib/client';

import { Door, FooterBanner, HeroBanner } from '../../components';
const  Tables = ({ doors, bannerData }) => (
  <div>
    <HeroBanner heroBanner ={bannerData.length && bannerData.length && bannerData[0]}/>
    {console.log(bannerData)}
    <div className="products-container">
      <h2 className="text-center mt-32 items-center"> Why Us</h2>
      <p>We provide insight into what best fits you</p>
    </div>
    <div className=" flex flex-col  flex-wrap mx-auto p-20 md:flex-row products-container">
      <div>

      </div>
      {doors?.map((door) => <Door key={door._id} door={door} />)}
    </div>
  
    <div className="products-container">
      {doors?.map((door) => <Door key={door._id} door={door} />)}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
    <h2>Doors</h2>
    <div className="products-heading">
    </div>
    <div className="products-container">
      {doors?.map((door) => <Door key={door._id} door={door} />)}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
  export const getServerSideProps = async () => {
    const query = '*[_type == "door"]';
    const doors = await client.fetch(query);
   
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return { 
         props:{ doors, bannerData }
    }
  }
  

export default  Tables;