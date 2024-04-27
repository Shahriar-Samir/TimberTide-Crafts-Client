import React from 'react';
import { Link } from 'react-router-dom';

const Subcategory = ({subcategory}) => {
    const {image,name,_id} = subcategory
    return (
        <Link to={`/artsAndCrafts/${name}`}>
        <div className=''>
            <img src={image}/>
            <h1>{name}</h1>
        </div>
        </Link>
    );
};

export default Subcategory;