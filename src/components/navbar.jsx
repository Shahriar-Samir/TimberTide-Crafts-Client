import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/authProvider";
import { Tooltip } from 'react-tooltip';


const Navbar = () => {
    const {userLoggedin,loader,logOut} = useContext(AuthContext)

    const handleLogout = ()=>{
        logOut()
        .then(res=> console.log(res))
        .catch(err=> console.log(err))
    }

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to='/' className={({isActive})=> isActive? 'bg-gray-400 text-black' : 'bg-white text-black'}>Home</NavLink></li>
      <li><NavLink to='/allArtsAndCrafts' className={({isActive})=> isActive? 'bg-gray-400 text-black' : 'bg-white text-black'}>All Art & Craft Items</NavLink></li>
      <li><NavLink to='/addCraftItem' className={({isActive})=> isActive? 'bg-gray-400 text-black' : 'bg-white text-black'}>Add Craft Item</NavLink></li>
      <li><NavLink to='/myArtsAndCrafts' className={({isActive})=> isActive? 'bg-gray-400 text-black' : 'bg-white text-black'}>My Art & Craft List</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">TimberTide Crafts</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
      <li><NavLink to='/' className={({isActive})=> isActive? 'bg-gray-400 text-black' : 'bg-white text-black'}>Home</NavLink></li>
      <li><NavLink to='/allArtsAndCrafts' className={({isActive})=> isActive? 'bg-gray-400 text-black' : 'bg-white text-black'}>All Art & Craft Items</NavLink></li>
      <li><NavLink to='/addCraftItem' className={({isActive})=> isActive? 'bg-gray-400 text-black' : 'bg-white text-black'}>Add Craft Item</NavLink></li>
      <li><NavLink to='/myArtsAndCrafts' className={({isActive})=> isActive? 'bg-gray-400 text-black' : 'bg-white text-black'}>My Art & Craft List</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    {loader? <span className="loading loading-bars loading-md text-blue-300"></span> : userLoggedin ? <div className="dropdown dropdown-hover dropdown-bottom">
        <div>
<img className="w-[50px] h-[50px] rounded-full" src={`${userLoggedin.photoURL}`}/> 
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] right-3  p-2 shadow bg-base-100 rounded-box w-[150px] flex flex-col gap-3 px-5">
            <li className="font-normal"><h1>{userLoggedin.displayName}</h1></li>
            <li className="flex justify-center"><button className="bg-black px-2 font-medium rounded-md py-2 text-white" onClick={handleLogout}>Log Out</button></li>
  </ul>
    </div>: <div className="flex items-center gap-4"><Link className="btn" to='/login'>Log In</Link><Link className="btn" to='/signup'>Register</Link></div>}
  </div>
</div>
    );
};

export default Navbar;