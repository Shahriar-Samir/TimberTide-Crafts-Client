import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";

const Login = () => {
    return (
        <div className='flex justify-center items-center h-[90vh]'>
        <div className='w-11/12 max-w-[350px] flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-semibold'>Log In</h1>
        <div className='flex gap-10 items-center'>
        <FcGoogle  className='text-3xl'/>
        <FaGithubSquare className='text-3xl'/>
        </div>
        <div className="divider m-0">Or</div>
        <form className="card-body w-full p-0">
        <div className="form-control">
          <label className="label pt-0">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
    </div>
    );
};

export default Login;