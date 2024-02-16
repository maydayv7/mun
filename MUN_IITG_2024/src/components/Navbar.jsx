import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Navbar = () => {
  return (
    // <nav className="bg-white border-gray-200 rounded-full dark:bg-gray-900">
  <div className=" fixed left-1/2 transform -translate-x-1/2 flex flex-wrap items-center rounded-full justify-center mx-auto mt-2"> {/* Remove max-w-screen-xl */}
    {/* <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> */}
     
    {/* </div> */}
    <div className="  items-center justify-center hidden w-full md:flex md:w-auto md:order-1 mt-2  " id="navbar-cta"> {/* Add mt-2 to align with the margin */}
      <ul className="flex flex-col justify-center font-medium md:p-0 border border-gray-100 rounded-full bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-grey bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home
</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        </li>
      </ul>
    </div>
  </div>
// </nav>

  );
}

export default Navbar;
