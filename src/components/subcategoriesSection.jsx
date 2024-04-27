import React, { useEffect } from 'react';
import Subcategory from './subcategory';

const SubcategoriesSection = () => {
    const [subcategories,setSubcategories] = React.useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/subcategories')
        .then(res=> res.json())
        .then(data=> setSubcategories(data))
        .catch(err=> console.log(err))
    },[])

    return (
        <div className='grid grid-cols-3'>
           {subcategories.map(subcategory=>{
            return <Subcategory key={subcategory._id} subcategory={subcategory}/>
           })} 
        </div>
    );
};

export default SubcategoriesSection;