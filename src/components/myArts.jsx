import { useLoaderData } from "react-router-dom";


const MyArts = () => {
    const data = useLoaderData()

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-2xl">Your Arts And Crafts</h1>
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">Click</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
            </div>
            <div className="grid grid-cols-2 gap-5">
                {
                    data.map(item=>{
                        return <>
                            <div key={item._id} className="card bg-base-100 shadow-xl">
  <figure><img src={`${item.image}`} /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
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