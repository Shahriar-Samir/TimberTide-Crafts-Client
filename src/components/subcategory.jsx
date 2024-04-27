import React from 'react';

const Subcategory = ({subcategory}) => {
    const {image,name,_id} = subcategory
    return (
        <div className=''>
            <img src={image}/>
            <h1>{name}</h1>
        </div>
    );
};

export default Subcategory;