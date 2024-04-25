
import { TbError404 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";


export default function Errorpage() {
    const navigate = useNavigate()
    const goBack = ()=>{
        navigate(-1)
    }
  return (
    <div className='flex justify-center items-center h-[100vh]'>
            <div className='flex flex-col items-center'>
                    <TbError404  className='text-[200px]'/>
                    <div className='flex items-center flex-col gap-3'>
                    <h1 className='text-3xl font-bold'>Error</h1>
                    <p className='text-xl font-semibold text-center'>Page you're looking for not found!  :(</p>
                    </div>
                    <button className='btn mt-10 text-lg' onClick={goBack}> Go back 😥</button>
            </div>
    </div>
  )
}