import { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/authProvider";
import { toast, ToastContainer } from "react-toastify";


const MyArts = () => {
    const data = useLoaderData()
    const {userLoggedin} = useContext(AuthContext)
    
    const deleteCraftItem = (id)=>{
            fetch(`https://assignment-10-backend-dusky.vercel.app/craftitem/${id}`,{
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
        <div className="flex flex-col items-center">
            <ToastContainer/>
            <h1 className="font-bold text-2xl">Your Arts And Crafts</h1>
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">All</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to={`/myArtsAndCrafts/${userLoggedin.uid}/all`}>All</Link></li>
                <li><Link to={`/myArtsAndCrafts/${userLoggedin.uid}/customized-yes`}>Customization - Yes</Link></li>
                <li><Link to={`/myArtsAndCrafts/${userLoggedin.uid}/customized-no`}>Customization - No</Link></li>
            </ul>
            </div>
            <div className="grid grid-cols-2 gap-5">
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
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={`${item.image}`} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.itemName}</h2>
                            <p>{item.price}</p>
                            <p>{item.rating}</p>
                            <p>{item.customization}</p>
                            <p>{item.stockStatus}</p>
                            <div className="card-actions justify-center mt-5">
                            <Link to={`/updateCraftItem/${item._id}`}><button className="btn btn-primary">Update</button></Link>
                            <button className="btn btn-error text-white" onClick={()=>document.getElementById(`my_modal_${index}`).showModal()}>Delete</button>
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