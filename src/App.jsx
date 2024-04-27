import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"


function App() {


  return (
    <div className="">
     <Navbar/>
     <Outlet/>
    </div>
  )
}

export default App
