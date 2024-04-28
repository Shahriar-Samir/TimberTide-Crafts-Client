import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const CraftItemCard = ({item}) => {
    const {image, itemName, subcategoryName,_id, rating,price, stockStatus} = item

    return (

        <div     className={`prefers card max-w-96 mx-auto justify-center  shadow-xl border-2 border-white`}>
  <figure className='h-[225px]'><img src={image} className='w-full  object-cover' /></figure>
  <div className="card-body p-3">
    <h3 className='font-medium'>{subcategoryName}</h3>
    <h2 className="font-bold text-xl">{itemName}</h2>
    <p><span className='font-bold me-3'>Rating:</span>{rating} out of 5</p>
    <p className='font-bold'>${" "+price}</p>
    <div className="card-actions items-center justify-center">
    <Link to={`/craftDetails/${_id}`} className='border-none btn bg-[#CF883C] hover:bg-[#a56c2f] text-white w-[55%]'><button className="">View Details</button></Link>
    <p className={` font-bold text-white w-[35%] p-2 ${stockStatus==='In stock'? 'btn cursor-default hover:bg-black bg-black': 'btn cursor-default hover:bg-gray-300 bg-gray-300'}`}>{stockStatus}</p>
    </div>
  </div>
</div>  
    );
};

export default CraftItemCard;