import React from "react";
import Boltlogo from "../../assets/Boltlogo.svg";
import Eng from '../../assets/english.svg'
import {FiMenu} from 'react-icons/fi'
import {FiX} from 'react-icons/fi'
import {useState} from 'react'

const Navbar = () => {
  const[toggle, setToggle] = useState(false)
    const letToggle = () => {
    setToggle(!toggle)
    }
  return (
    <nav className="pb-4 flex flex-col gap-4 relative">
      <div className="bg-[#f9fafb] lg:block sm:hidden md:hidden flex justify-between sm:px-0 px-[6.5rem] p-3">
        <div className="flex gap-1 items-center">
            <img src={Eng} className="w-[1.5rem] h-[1.5rem]"/>
            <p>English</p>
        </div>
        <div className="flex gap-10">
            <p>Partner with Bolt as a:</p>
            <div className="text-[#127C71] flex gap-6">
                <a href="https://partners.bolt.eu/driver-signup?lang=en-ng&_ga=2.154775416.172172144.1687514812-2102342493.1687514812">Drivers</a>
                <a href="https://fleets.bolt.eu/?lang=en-ng&_ga=2.142757621.172172144.1687514812-2102342493.1687514812">Fleet partner</a>
                <a href="https://bolt.eu/en-ng/food/courier/">Courier</a>
                <a href="https://partners.food.bolt.eu/?_ga=2.83447254.172172144.1687514812-2102342493.1687514812">Restaurant or Store</a>
            </div>
        </div>
      </div> 

      <div>
      <div className="flex gap-6 px-2 lg:px-[6.5rem]">
      <div className="flex gap-3 mt-3 items-center relative">
      <div className='hidden sm:block md:block top-[0.2rem] absolute' onClick={letToggle}>
        {toggle ? <FiX size={28}/> :<FiMenu size={28}/>}
      </div>
        <div className={toggle ? "hidden" : 'block ml-10' }>
          <img src={Boltlogo} alt="Logo" className=""/>
        </div>    
        </div>
        <div className={toggle ? "text-white bg-slate-600 flex flex-col justify-center items-center w-full h-screen" : "flex gap-[2px] relative sm:hidden md:hidden"}>
        <div>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="focus:ring-4 focus:outline-none font-medium text-sm px-8 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Products{" "}
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[20rem]"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Rides</strong>
              </a>
              <p>Request a ride in minutes!</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Scooters</strong>
              </a>
              <p className="w-[20rem]">
                2-wheel ride rental at your fingertips
              </p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Car-sharing</strong>
              </a>
              <p className="w-[20rem]">
                Top-quality car rental at affordable prices
              </p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Food delivery</strong>
              </a>
              <p className="w-[20rem]">Your favourite food, delivered fast</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Grocery delivery</strong>
              </a>
              <p className="w-[20rem]">ite food, delivered fast</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Food delivery</strong>
              </a>
              <p className="w-[20rem]">Your favourite food, delivered fast</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button
          id="seconddrop"
          data-dropdown-toggle="dropdowntwo"
          className="focus:ring-4 focus:outline-none font-medium text-sm px-8 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Partner with Bolt{" "}
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          id="dropdowntwo"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[20rem] dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="seconddrop"
          >
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Rides</strong>
              </a>
              <p>Request a ride in minutes!</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Scooters</strong>
              </a>
              <p className="w-[20rem]">
                2-wheel ride rental at your fingertips
              </p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Car-sharing</strong>
              </a>
              <p className="w-[20rem]">
                Top-quality car rental at affordable prices
              </p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Food delivery</strong>
              </a>
              <p className="w-[20rem]">Your favourite food, delivered fast</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Grocery delivery</strong>
              </a>
              <p className="w-[20rem]">ite food, delivered fast</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Doorstep</strong>
              </a>
              <p className="w-[20rem]">Your favourite food, delivered fast</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="focus:ring-4 focus:outline-none font-medium text-sm px-8 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Company{" "}
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[20rem] dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Rides</strong>
              </a>
              <p>Request a ride in minutes!</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Scooters</strong>
              </a>
              <p className="w-[20rem]">
                2-wheel ride rental at your fingertips
              </p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Car-sharing</strong>
              </a>
              <p className="w-[20rem]">
                Top-quality car rental at affordable prices
              </p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Food delivery</strong>
              </a>
              <p className="w-[20rem]">Your favourite food, delivered fast</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Grocery delivery</strong>
              </a>
              <p className="w-[20rem]">ite food, delivered fast</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Food delivery</strong>
              </a>
              <p className="w-[20rem]">Your favourite food, delivered fast</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="focus:ring-4 focus:outline-none font-medium text-sm px-8 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Support{" "}
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[20rem] dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Rides</strong>
              </a>
              <p>Request a ride in minutes!</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Scooters</strong>
              </a>
              <p className="w-[20rem]">
                2-wheel ride rental at your fingertips
              </p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Car-sharing</strong>
              </a>
              <p className="w-[20rem]">
                Top-quality car rental at affordable prices
              </p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Food delivery</strong>
              </a>
              <p className="w-[20rem]">Your favourite food, delivered fast</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Grocery delivery</strong>
              </a>
              <p className="w-[20rem]">ite food, delivered fast</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Food delivery</strong>
              </a>
              <p className="w-[20rem]">Your favourite food, delivered fast</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="focus:ring-4 focus:outline-none font-medium text-sm px-8 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Safety{" "}
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[20rem] dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Rides</strong>
              </a>
              <p>Request a ride in minutes!</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Scooters</strong>
              </a>
              <p className="w-[20rem]">
                2-wheel ride rental at your fingertips
              </p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Car-sharing</strong>
              </a>
              <p className="w-[20rem]">
                Top-quality car rental at affordable prices
              </p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Food delivery</strong>
              </a>
              <p className="w-[20rem]">Your favourite food, delivered fast</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Grocery delivery</strong>
              </a>
              <p className="w-[20rem]">ite food, delivered fast</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Food delivery</strong>
              </a>
              <p className="w-[20rem]">Your favourite food, delivered fast</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="focus:ring-4 focus:outline-none font-medium text-sm px-8 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Cities{" "}
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[20rem] dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Rides</strong>
              </a>
              <p>Request a ride in minutes!</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Scooters</strong>
              </a>
              <p className="w-[20rem]">
                2-wheel ride rental at your fingertips
              </p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Car-sharing</strong>
              </a>
              <p className="w-[20rem]">
                Top-quality car rental at affordable prices
              </p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Food delivery</strong>
              </a>
              <p className="w-[20rem]">Your favourite food, delivered fast</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Grocery delivery</strong>
              </a>
              <p className="w-[20rem]">ite food, delivered fast</p>
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
              <a href="#">
                <strong>Food delivery</strong>
              </a>
              <p className="w-[20rem]">Your favourite food, delivered fast</p>
            </li>
          </ul>
        </div>
      </div>
        </div>
      </div>
      </div>      
    </nav>
  );
};

export default Navbar;
