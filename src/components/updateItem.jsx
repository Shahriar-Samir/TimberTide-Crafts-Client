import { useContext, useEffect } from 'react';
import {toast,ToastContainer} from 'react-toastify'
import { AuthContext } from '../providers/authProvider';
import { useLoaderData } from 'react-router-dom';

const UpdateItem = () => {
  const craftItem = useLoaderData()

    const addItemHandler = (e)=>{
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const itemName = form.itemName.value
        const subcategoryName = form.subcategoryName.value
        const shortDescription = form.shortDescription.value
        const price = form.pricing.value
        const rating = form.rating.value
        const customization = form.customization.value
        const processingTime = form.processingTime.value
        const stockStatus = form.stockStatus.value

        fetch('http://localhost:5000/crafts',{
          method: 'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify({formData:{image, itemName, subcategoryName, shortDescription, price, rating ,customization, processingTime, stockStatus}, id:craftItem._id})
        })
        .then(res=> res.json())
        .then(status=>{
            if(status.acknowledged){
              toast.success('Updated item successfully')
            }
        })
        .catch(()=>{
            toast.error('Something went wrong!')
        })
    }

    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme', 'light')
    },[])
    return (
       <>
       <ToastContainer/>
        <div className='flex justify-center items-center h-[140vh]'>
        <div className='flex flex-col w-11/12 max-w-[500px] gap-5'>
            <h1 className='text-center text-3xl font-bold'>Update craft item</h1>
            <form className="p-0 flex flex-col items-center" onSubmit={addItemHandler}>
        {/* <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input defaultValue={craftItem.image} type="text" placeholder="Image URL" name='image' className="input input-bordered" required />
        </div>
        <div className='flex w-full gap-4'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Item Name</span>
          </label>
          <input defaultValue={craftItem.itemName} type="text" placeholder="Item name" name='itemName' className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Subcategory Name</span>
          </label>
          <input defaultValue={craftItem.subcategoryName} type="text" placeholder="Subcategory name" name='subcategoryName' className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Short description</span>
          </label>
          <textarea placeholder="Short description" name='shortDescription' className="input input-bordered pt-2 h-[100px]" defaultValue={craftItem.shortDescription} required />
        </div>
        <div className='flex w-full gap-4'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Pricing</span>
          </label>
          <input defaultValue={craftItem.price} type="text" placeholder="Pricing" name='pricing' className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input defaultValue={craftItem.rating} type="text" placeholder="Rating" name='rating' className="input input-bordered" required />
        </div>
        </div>
        <div className='flex w-full gap-4'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Customization</span>
          </label>
          <input defaultValue={craftItem.customization} type="text" placeholder="Customization" name='customization' className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Processing Time</span>
          </label>
          <input defaultValue={craftItem.processingTime} type="text" placeholder="Processing time" name='processingTime' className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Stock Status</span>
          </label>
          <input defaultValue={craftItem.stockStatus} type="text" placeholder="Stock status" name='stockStatus' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6 w-full">
          <button className="btn btn-primary">Update Item</button>
        </div> */}
         <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" defaultValue={craftItem.image} placeholder="Image URL" name='image' className="input input-bordered" required />
        </div>
        <div className='flex w-full gap-4'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Item Name</span>
          </label>
          <input type="text" defaultValue={craftItem.itemName} placeholder="Item name" name='itemName' className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Subcategory Name</span>
          </label>
          <select name='subcategoryName' className='input input-bordered' defaultValue={craftItem.subcategoryName}  required>
             <option value="">- - Select a subcategory - -</option>
             <option value="Wooden Furniture & Sculptures">Wooden Furniture & Sculptures</option>
             <option value="Wooden Home Decor">Wooden Home Decor
</option>
             <option value="Wooden Utensils and Kitchenware">Wooden Utensils and Kitchenware</option>
             <option value="Jute Home Decor">Jute Home Decor</option>
             <option value="Jute Kitchenware & utensils">Jute Kitchenware & utensils</option>
             <option value="Jute and wooden jewellery">Jute and wooden jewellery
</option>
          </select>
        </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Short description</span>
          </label>
          <textarea placeholder="Short description" name='shortDescription' className="input input-bordered pt-2 h-[100px]" required defaultValue={craftItem.shortDescription}/>
        </div>
        <div className='flex w-full gap-4'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Pricing</span>
          </label>
          <input type="number" defaultValue={craftItem.price} step='any' min='0' placeholder="Pricing" name='pricing' className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="number" step='any' defaultValue={craftItem.rating} max='5' min='0' placeholder="Rating" name='rating' className="input input-bordered" required />
        </div>
        </div>
        <div className='flex w-full justify-between py-3 pb-2 px-1'>
        <div className="flex items-center gap-2">
          <span className="label-text">Customization:</span>
          <div className='flex gap-2'>
          <label htmlFor='Yes' className='label-text'>Yes</label>
         <input id='Yes' required type='radio' name='customization' defaultChecked={craftItem.customization === 'Yes' ? true : false} value='Yes'/>
          </div>
         <div className='flex gap-2'>
          <label htmlFor='No' className='label-text'>No</label>
         <input id='No' required type='radio' name='customization' defaultChecked={craftItem.customization === 'No' ? true : false} value='No'/>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="label-text ">Stock Status:</span>
          <div className='flex gap-2'>
          <label htmlFor='inStock' className='label-text'>In stock</label>
         <input id='inStock' defaultChecked={craftItem.stockStatus === 'In stock' ? true : false} required type='radio' name='stockStatus' value='In stock'/>
          </div>
         <div className='flex gap-2'>
          <label htmlFor='madeToOrder' className='label-text'>Made to order</label>
         <input id='madeToOrder' required type='radio' name='stockStatus' defaultChecked={craftItem.stockStatus === 'Made to Order' ? true : false} value='Made to Order'/>
          </div>
        </div>
          
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Processing Time</span>
          </label>
          <input type="text" defaultValue={craftItem.processingTime} placeholder="Processing time" name='processingTime' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6 w-full">
          <button className="btn btn-primary" >Add Item</button>
        </div>
        </form>
            </div>
        </div>
       </>
    );
};

export default UpdateItem;