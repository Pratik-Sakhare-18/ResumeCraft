import React from 'react'
import LOGO from '../../assets/resume-craft.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='h-auto w-full bg-black border-t-5 border-purple-600 rounded-tr-2xl rounded-tl-2xl flex flex-col md:flex-row justify-around items-center gap-8 md:gap-12 lg:gap-20 mt-10 p-8 md:h-[300px]'>
        <div className='h-[150px] w-[150px] bg-amber-800 rounded-full hover:shadow-2xl hover:shadow-purple-500 transition-all duration-500 flex-shrink-0'>
          <img src={LOGO} alt='logo' className='h-[100%] w-[100%] rounded-full hover:rotate-12 hover:scale-120 transition-all duration-500'></img>
        </div>
        <div className='h-auto w-full md:w-[240px] text-center md:text-left'>
          <h1 className='font-bold text-white text-[35px] '>ResumeCraft</h1>
          <p className='text-gray-200 text-[14px]'>"ResumeCraft – a smart, easy-to-use platform to build professional resumes in minutes."</p>
          <Link to="/template">
            <button className='h-[50px] w-[170px] cursor-pointer bg-black rounded-[10px] border-3 border-purple-700 text-[15px] text-purple-700 font-bold mt-5 hover:bg-purple-700 hover:text-white transition-all duration-300'>Get Started</button>
          </Link>
        </div>

        <div className='h-auto w-auto flex flex-col justify-center  gap-1 md:w-auto '>
          <h1 className='font-bold text-white text-[25px]'>Quick Links</h1>
          <div className='h-[4px] w-[230px] bg-purple-700 rounded-[7px] mt-2'></div>
          <Link to="/" className='text-white text-[15px]  hover:text-purple-700 transition-all duration-500 mt-3 flex gap-1  items-center cursor-pointer'><p className='text-purple-700'><i className="fa-solid fa-graduation-cap"></i></p>Home</Link>
          <Link to="/build-resume" className='text-white text-[15px]  hover:text-purple-700 transition-all duration-500 mt-3 flex gap-1  items-center cursor-pointer'><p className='text-purple-700'><i className="fa-solid fa-building"></i></p>Build Resume</Link>
          <Link to="/Login" className='text-white text-[15px]  hover:text-purple-700 transition-all duration-500 mt-3 flex gap-1  items-center cursor-pointer'><p className='text-purple-700'><i className="fa-solid fa-right-to-bracket"></i></p>Login</Link>
          <Link to="/Contact" className='text-white text-[15px]  hover:text-purple-700 transition-all duration-500 mt-3 flex gap-1  items-center cursor-pointer'><p className='text-purple-700'><i className="fa-solid fa-phone"></i></p>Contact</Link>
        </div>

        <div className='h-auto w-auto md:w-auto'>
          <h1 className='font-bold text-white text-[25px]'>Contact Us</h1>
          <div className='h-[4px] w-[230px] bg-purple-700 rounded-[7px] mt-2'></div>
          <div className='text-white text-[15px] hover:text-purple-700 transition-all duration-500 mt-3 flex gap-2 items-center'><p className='text-purple-700'><i className="fa-solid fa-phone"></i></p>+91 9307913077</div>
          <div className='text-white text-[15px] hover:text-purple-700 transition-all duration-500 mt-3 flex gap-2 items-center'><p className='text-purple-700'><i className="fa-solid fa-envelope"></i></p>resumecraft111@gmail.com</div>
          <div className='text-white text-[15px] hover:text-purple-700 transition-all duration-500 mt-3 flex gap-2 items-center'><p className='text-purple-700'><i className="fa-solid fa-location-dot"></i></p>Pune, IN</div>
        </div>

      </div>

      <div className='h-auto w-full bg-black flex flex-col md:flex-row justify-center md:justify-around items-center gap-4 p-4 border-t-2 border-gray-400'>
        <h1 className='font-bold text-sm md:text-[18px] text-white text-center'>© 2025 ResumeCraft. All Rights Reserved.</h1>
        <div className='flex flex-col sm:flex-row gap-4'>
          <button className='h-[40px] w-[150px] border-2 text-white text-[15px] border-white rounded-[7px] cursor-pointer hover:bg-gray-500/50'>Privacy Policy</button>
          <button className='h-[40px] w-[150px] border-2 text-white text-[15px] border-white rounded-[7px] cursor-pointer hover:bg-gray-500/50'>Terms of Service</button>
        </div>
      </div>
    </>
  )
}

export default Footer
