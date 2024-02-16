import '../App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
const  Navbar =()=> {
  return (
  <div>
   <div className="w-full flex flex-row items-center justify-center text-center text-xl text-darkslateblue font-montserrat ">
      <div className="flex-1 rounded-[10px] bg-white overflow-hidden flex flex-row items-start justify-between p-[17px]">
        <div className="relative leading-[14px] font-medium bg-red-500 w-full h-full" >Home</div>
        <div className="relative leading-[14px] font-medium">About us</div>
        <div className="relative leading-[14px] font-medium">
          Previous editions
        </div>
        <div className="relative leading-[14px] font-medium">Contact us</div>
      </div>
    </div>
    </div>
   )
}

export default Navbar;