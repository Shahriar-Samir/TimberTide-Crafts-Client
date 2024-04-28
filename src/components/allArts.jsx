import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MyArtsAndCrafts = () => {
    const craftItems = useLoaderData()
    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme', 'light')
    },[])
    return (
        <div className='w-11/12 mx-auto mt-10 max-w-[1200px]'>
           <div className="overflow-x-auto">
  <table className="table table-auto ">
    {/* head */}
    <thead>
      <tr>

        <th className='w-2/6'>Name</th>
        <th className='w-1/6 text-center'>Stoke Status</th>
        <th className='w-1/6 text-center'>Pricing</th>
        <th className='w-1/6 text-center'>Rating</th>
        <th className='w-2/6 text-center'></th>
      </tr>
    </thead>
    <tbody>
        {craftItems.map(item=>{
            return  <tr key={item._id}>

            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={`${item.image}`}/>
                  </div>
                </div>
                <div>
                  <div className="font-bold">{item.itemName}</div>
                  <div className="text-sm opacity-50">{item.subcategoryName}</div>
                </div>
              </div>
            </td>
            <td className=''>
            {item.stockStatus === 'In stock' ? <p className='bg-green-400 text-white text-center p-3 rounded-md font-bold w-full'>{item.stockStatus}</p> : <p className='w-full bg-gray-400 text-white text-center p-3 rounded-md font-bold'>{item.stockStatus}</p>}
            </td>
            <td className='text-center'>${item.price}</td>
            <td className='text-center'>{item.rating}</td>
            <th>
              <Link to={`/craftDetails/${item._id}`}><button className="border-none btn bg-[#CF883C] hover:bg-[#a56c2f] text-white">details</button></Link>
            </th>
          </tr>
        })}
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default MyArtsAndCrafts;