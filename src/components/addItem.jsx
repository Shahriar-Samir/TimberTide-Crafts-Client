import React from 'react';

const AddItem = () => {
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
        const email = form.userEmail.value
        const name = form.userName.value
        console.log(image, itemName, subcategoryName, shortDescription, price, rating ,customization, processingTime, stockStatus, email, name)
    }
    return (
        <div className='flex justify-center items-center'>
        <form className="w-11/12 max-w-[500px] p-0 flex flex-col items-center" onSubmit={addItemHandler}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" placeholder="Image URL" name='image' className="input input-bordered" required />
        </div>
        <div className='flex w-full gap-4'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Item Name</span>
          </label>
          <input type="text" placeholder="Item name" name='itemName' className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Subcategory Name</span>
          </label>
          <input type="text" placeholder="Subcategory name" name='subcategoryName' className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Short description</span>
          </label>
          <textarea placeholder="Short description" name='shortDescription' className="input input-bordered pt-2 h-[100px]" required />
        </div>
        <div className='flex w-full gap-4'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Pricing</span>
          </label>
          <input type="text" placeholder="Pricing" name='pricing' className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" placeholder="Rating" name='rating' className="input input-bordered" required />
        </div>
        </div>
        <div className='flex w-full gap-4'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Customization</span>
          </label>
          <input type="text" placeholder="Customization" name='customization' className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Processing Time</span>
          </label>
          <input type="text" placeholder="Processing time" name='processingTime' className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Stock Status</span>
          </label>
          <input type="text" placeholder="Stock status" name='stockStatus' className="input input-bordered" required />
        </div>
        <div className='flex w-full gap-4'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input type="email" placeholder="User email" name='userEmail' className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" placeholder="User name" name='userName' className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control mt-6 w-full">
          <button className="btn btn-primary">Add Item</button>
        </div>
        </form>
        </div>
    );
};

export default AddItem;