import React from 'react';
import { Link } from 'react-router-dom';



const CraftItemCard = ({item}) => {
    const {image, itemName, subcategoryName,_id} = item
    return (
        <div className='border border-black'>
            <div>
                <img src={image}/>
            </div>
            <div className='flex flex-col'>
                <h2>{subcategoryName}</h2>
                <h1>{itemName}</h1>
                <h1></h1>
                <Link to={`/craftDetails/${_id}`}><button>View Details</button></Link>
            </div>
        </div>
    );
};

export default CraftItemCard;