import { ToastContainer, toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit =(e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photoUrl = form.photoUrl.value
        const password = form.password.value
        console.log(name, email, photoUrl, password)
        toast.success('Logged in successfully')
    }
    return (
        <>
        <ToastContainer />
        <div className='flex justify-center items-center h-[90vh]'>
        <div className='w-11/12 max-w-[350px] flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-semibold'>Create a new account</h1>
        <form className="card-body w-full p-0" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label pt-0">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label pt-0">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label pt-0">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photoUrl' placeholder="Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>Already have an account ? <Link className='font-semibold underline' to='/login'>Log In</Link></p>
    </div>
    </div>
    </>
    );
};

export default Login;