import React from 'react';
import { useLoaderData } from 'react-router-dom';


const SubcateogryCrafts = () => {
    const craftItems = useLoaderData()
    return (
        <div className='grid grid-cols-2'>
                {
                    craftItems.map(item=>{
                        return <div key={item._id}>
                                <img src={item.image}/>
                                <h1>{item.SubcateogryName}</h1>
                                <h2>{item.shortdescription}</h2>
                                <h2>{item.price}</h2>
                                <h2>{item.rating}</h2>
                                <h2>{item.processingTime}</h2>
                                <button>View Details</button>
                        </div>
                    })
                }
        </div>
    );
};

export default SubcateogryCrafts;