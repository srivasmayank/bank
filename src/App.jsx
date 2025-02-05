import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bgimage from './er.png'
import React from 'react'
import logo from './tdLogo.png'
import { FaEye, FaEyeSlash, FaMapMarkerAlt, FaQuestionCircle, FaUser } from "react-icons/fa";
import { MdLockOutline } from 'react-icons/md'

function App() {
  const [count, setCount] = useState(0)
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-full">
    {/* Background Image */}
    
   
    {/* Content Wrapper */}
    <div className="bg-green-900 text-white py-1 px-4 text-sm flex items-center md:pl-30">
      <div className='md:pl-20'>
      <span className="font-bold text-lg mr-2">FDIC</span>
      <span className="italic">FDIC-Insured - Backed by the full faith and credit of the U.S. Government</span>
      </div>
     
    </div>
    <div className="relative z-10 flex flex-col min-h-full border-b-6 border-green-700">
      {/* Header */}
      <div className="md:flex hidden justify-around items-center px-6 py-3 bg-white border-b-2 border-gray-100 drop-shadow-2xl">
      {/* Left Section: Logo and Tagline */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="TD Bank Logo" className="h-10" />
      </div>

      {/* Center Section: Navigation Links */}
      <div className="flex space-x-6 text-green-700 font-medium">
        <span className="border-b-6 border-green-500 font-bold">My TD</span>
        <span>Products</span>
        <span>Solutions ▼</span>
      </div>
      </div>
      

      {/* Right Section: Icons and Login */}
      <div className="flex items-center space-x-4 text-green-700 mt-2 md:mt-0">
      <FaMapMarkerAlt className="text-lg" />
        <FaQuestionCircle className="text-lg" />
        <span>EN ▼</span>
        <div className="border-l border-gray-300 h-6"></div>
        <FaUser className="text-lg" />
        <span>Log In ▼</span>
      </div>
    </div>

      {/* Main Content */}
      <div className="flex relative flex-grow pt-10 justify-center px-6 pb-35">
      <div
className="hidden md:block absolute inset-0 bg-cover bg-center h-full"  style={{ backgroundImage: `url(${bgimage})` }}
></div>
        <div className="flex md:flex-row flex-col gap-10 justify-evenly w-full  relative z-10">
        <div className="w-full md:w-auto">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">Welcome to Online Banking</h2>

          <div className="bg-white p-6 px-8  md:shadow-lg md:opacity-65">
      <input
        type="text"
        placeholder="User name"
        className="w-full p-4 border border-gray-200 rounded mb-6"
      />

      {/* Password Input with Eye Icon */}
      <div className="relative w-full mb-6">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full p-4 px-6 border border-gray-200 rounded pr-12"
        />
        <button
          type="button"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <div className="flex items-center mb-4">
        <input type="checkbox" id="remember" className="mr-2 w-5 h-5" />
        <label htmlFor="remember">Remember me</label>
      </div>

      <button className="w-full bg-gray-100 text-gray-400 py-2 mb-4 font-[600] rounded cursor-pointer border-2">
        Log in
      </button>

      <p className="text-green-700 mt-2 cursor-pointer mb-3">
        Forgot user name and/or password?
      </p>
    </div>
          </div>
          {/* Login Box */}
          

          {/* Right Side Text */}
          <div className="space-y-2 mt-10 md:mt-20 md:ml-30 md:-mr-15">
          <div className="space-y-4 border-b border-gray-400 pb-6 w-full md:w-[70%]">
          <p className="text-green-500 font-[700] cursor-pointer">Sign up for Online Banking &gt;</p>
            <p className="text-green-500 font-[700] cursor-pointer">View the Online Banking demo &gt;</p>
            <p className="text-green-500 font-[700] cursor-pointer">Learn more about TD mobile banking &gt;</p>
            </div> 
            <div>
            <p className="text-green-500 font-[500] flex gap-2 item-center "> <MdLockOutline className='mt-1 text-lg text-black'/>Find out more about TD Bank's online security</p>
            <p className='max-w-md'>
              and our commitment to provide you with a safe and secure online and
              mobile banking experience.
            </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <footer className="bg-gray-100 text-sm text-gray-700 h-screen">
      <div className="flex justify-center items-center py-4 mb-4 ">
        <div className='mt-4 text-2xl'>
        <span >Questions?</span>
        <a href="#" className="text-green-700 font-medium ml-2 hover:underline">
          Contact us &gt;
        </a>
        </div>
        
      </div>
      <div className="flex flex-wrap md:justify-center md:space-x-12 space-x-8 py-4 mb-6 space-y-2 md:pl-0 pl-2 ">
      <a href="#" className="hover:underline">
          Help
        </a>
        <a href="#" className="hover:underline">
          Terms of Use
        </a>
        <a href="#" className="hover:underline">
          Security
        </a>
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <a href="#" className="hover:underline">
          California Privacy
        </a>
        <a href="#" className="hover:underline">
          Bank Deposits FDIC Insured
        </a>
        <a href="#" className="hover:underline">
          Online Advertising
        </a>
      </div>
      <div className="border border-gray-300 text-center mx-auto  text-sm max-w-4xl mb-5">
      <div className="border-b border-gray-300 py-2  font-medium text-gray-600">
        SECURITIES AND INVESTMENTS
      </div>
      <div className="grid grid-cols-3 divide-x divide-gray-300">
        <div className="py-2 text-gray-600 col-span-full md:col-span-1 border">Not FDIC Insured</div>
        <div className="py-2 text-gray-600 col-span-full md:col-span-1 border">No Bank Guarantee</div>
        <div className="py-2 text-gray-600 col-span-full md:col-span-1 border">May Lose Value</div>
      </div>
    </div>
      <div className="px-8 py-4  text-xs max-w-4xl mx-auto">
        Registered Investment Advisory, Securities and Brokerage services are
        offered through TD Private Client Wealth, LLC, member FINRA/SIPC. TD
        Private Client Wealth, LLC and TD Bank, N.A. are affiliated through
        their parent company the Toronto-Dominion Bank. TD Wealth is a
        trademark owned by the Toronto-Dominion Bank, used with permission.
        <div className="text-xs py-2 mt-3">
        © 2025 TD Bank, N.A. All Rights Reserved
      </div>
      </div>
      
    </footer>
  </div>
  )
}

export default App


