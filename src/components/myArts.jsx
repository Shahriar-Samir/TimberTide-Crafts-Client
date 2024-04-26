import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/authProvider";


const MyArts = () => {
    const data = useLoaderData()
    const {userLoggedin} = useContext(AuthContext)
  
    return (
        <div className="flex flex-col items-center">
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
                    data.map(item=>{
                        return <>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={`${item.image}`} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.itemName}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-center mt-5">
                            <Link to={`/craftDetails/${item._id}`}><button className="btn btn-primary">View Details</button></Link>
                            </div>
                        </div>
                        </div>
                        
                        </>
                    })
                }
            </div>
        </div>
    );
};

export default MyArts;