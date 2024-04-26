import { useLoaderData } from 'react-router-dom';

const CraftItemDetails = () => {
    const data = useLoaderData()
    return (
        <div className='mt-5 w-10/12 max-w-[1000px] mx-auto'>
            <h1 className='text-center text-3xl font-bold'>Craft Details</h1>
            <div className='mt-16 flex gap-10'>
            <img className='w-1/2 object-cover' src={`${data.image}`}/>
            <div className='flex flex-col'>
            <p>Name : {data.itemName}</p>
            <p>Subcategory : {data.subcategoryName}</p>
            <p>Price : {data.price}</p>
            <p>Rating : {data.rating}</p>
            <p>Customization : {data.customization}</p>
            <p>Processing Time : {data.processingTime}</p>
            <p>Stock Status : {data.stockStatus}</p>
            </div>
            </div>
            <div className='mt-5'>
                <h1 className='text-2xl font-bold'>Descriptions</h1>
                <p>{data.shortDescription}</p>
            </div>
        </div>
    );
};

export default CraftItemDetails;