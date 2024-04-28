import React, { useEffect } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';


const SubcateogryCrafts = () => {
    const craftItems = useLoaderData()
    const navigate = useNavigate()

    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme', 'light')
    },[])

    return (
        <div className='pt-10 pb-32 w-11/12 mx-auto max-w-[1200px]'>
             <div className=''>
                <button className='btn' onClick={()=>  navigate(-1)}><IoMdArrowRoundBack className='text-xl'/> Go Back</button>
            </div>
            <h1 className='text-center font-bold text-2xl mt-8'>All the specific category Items</h1>
       
                {
                   craftItems.length > 0 ?  
                   <div className='grid grid-cols-1 gap-16 md:grid-cols-2 mt-10'>{
                   craftItems.map(item=>{
                        const {image,subcategoryName,itemName,rating,price,shortDescription,_id ,processingTime} = item
                        return   <div key={item.key}    className={`prefers card max-w-96 mx-auto justify-center  shadow-xl border-2 border-white`}>
                        <figure className='h-[225px]'><img src={image} className='w-full  object-cover' /></figure>
                        <div className="card-body p-3">
                          <h3 className='font-medium'>{subcategoryName}</h3>
                          <h2 className="font-bold text-xl">{itemName}</h2>
                          <p>{shortDescription}</p>
                          <p><span className='font-bold me-3'>Rating:</span>{rating} out of 5</p>
                          <p><span className='font-bold me-3'>Processing Time:</span>{processingTime}</p>
                          <p className='font-bold'>${" "+price}</p>
                          <div className="card-actions items-center justify-center">
                          <Link to={`/craftDetails/${_id}`} className='border-none btn bg-[#CF883C] hover:bg-[#a56c2f] text-white w-[55%]'><button className="">View Details</button></Link>    
                          </div>
                        </div>
                      </div> 

                    })}</div> : <div className='h-[60vh] w-full '>
                        <p className='text-center mt-10'>There are no items available</p>
                    </div>
                }
        </div>
    );
};

export default SubcateogryCrafts;