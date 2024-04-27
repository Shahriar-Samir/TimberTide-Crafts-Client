import { useEffect } from "react";


const Loader = () => {
    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme', 'light')
    },[])
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div className='flex gap-5 items-center'>
            <h1 className='text-2xl font-bold'>Loading</h1>
            <span className="loading loading-bars loading-lg"></span>
            </div>
        </div>
    );
};

export default Loader;