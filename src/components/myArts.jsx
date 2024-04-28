import { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/authProvider";
import { toast, ToastContainer } from "react-toastify";


const MyArts = () => {
    const data = useLoaderData()
    const {userLoggedin} = useContext(AuthContext)
    
    const deleteCraftItem = (id)=>{
            fetch(`https://assignment-10-server-tawny-tau.vercel.app/craftitem/${id}`,{
               method: 'DELETE',
            })
            .then(res=> res.json())
            .then(status=>{
                if(status.acknowledged){
                toast.success('Item Deleted successfully')
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
        <div className="flex flex-col items-center mx-auto w-10/12 max-w-[1200px]">
            <ToastContainer/>
            <h1 className="font-bold mt-12 text-4xl">Your Arts And Crafts</h1>
            <div className="dropdown dropdown-end mt-10">
            <div tabIndex={0} role="button" className="btn m-1">Filter</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to={`/myArtsAndCrafts/${userLoggedin.uid}/all`}>All</Link></li>
                <li><Link to={`/myArtsAndCrafts/${userLoggedin.uid}/customized-yes`}>Customization - Yes</Link></li>
                <li><Link to={`/myArtsAndCrafts/${userLoggedin.uid}/customized-no`}>Customization - No</Link></li>
            </ul>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
                {
                    data.map((item,index)=>{
                        return <div key={item._id}>
                        <dialog id={`my_modal_${index}`} className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg text-center">Delete</h3>
                            <p className="py-4 text-center">Are you sure you want to delete this item ?</p>
                            <div className="modal-action justify-center">
                            <form method="dialog" className="flex items-center gap-4">
                                <button className="btn btn-error text-white" onClick={()=>{deleteCraftItem(item._id)}}>Delete</button>
                                <button className="btn">Cancel</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                        <div     className={`prefers card max-w-96 mx-auto justify-center  shadow-xl border-2 border-white h-[450px]`}>
                                <figure className='h-[225px]'><img src={item.image} className='w-full  object-cover' /></figure>
                                <div className="card-body p-3">
                                <h3 className='font-medium'>{item.subcategoryName}</h3>
                                <h2 className="font-bold text-xl">{item.itemName}</h2>
                                <p><span className='font-bold me-3'>Rating:</span>{item.rating} out of 5</p>
                                <p className='font-bold'>${" "+item.price}</p>
                                <div className="card-actions items-center justify-center">
                                <Link to={`/updateCraftItem/${item._id}`} className='border-none btn bg-[#29b129] hover:bg-[#29b129] text-white w-[55%]'><button className="">Update</button></Link>
                                <button className="btn bg-[#be2d2d] hover:bg-[#be2d2d] border-none text-white" onClick={()=>document.getElementById(`my_modal_${index}`).showModal()}>Delete</button>
                                </div>
                                </div>
                                </div>
                        
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default MyArts;


