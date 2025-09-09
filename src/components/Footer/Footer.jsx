import React from 'react'
import LOGO from '../../assets/resume-craft.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='h-[300px] w-[100%] bg-black border-t-5 border-purple-600 rounded-tr-2xl rounded-tl-2xl flex justify-center items-center gap-30 mt-10'>
        <div className='h-[150px] w-[150px] bg-amber-800 rounded-full hover:shadow-2xl hover:shadow-purple-500 transition-all duration-500'>
          <img src={LOGO} alt='logo' className='h-[100%] w-[100%] rounded-full hover:rotate-12 hover:scale-120 transition-all duration-500'></img>
        </div>
        <div className='h-[220px] w-[240px]'>
          <h1 className='font-bold text-white text-[35px] '>ResumeCraft</h1>
          <p className=' text-gray-200 text-[14px] '>"ResumeCraft –a smart, easy-to-use platform to build professional resumes in minutes."</p>
          <Link to="/template">
            <button className='h-[50px] w-[170px] cursor-pointer bg-black rounded-[10px] border-3 border-purple-700 text-[15px] text-purple-700 font-bold mt-5 hover:bg-purple-700 hover:text-white transition-all duration-300'>Get Started</button>
          </Link>
        </div>

        <div className='h-[220px] w-[230px] '>
          <h1 className='font-bold text-white text-[25px]'>Quick Links</h1>
          <div className='h-[4px] w-[230px] bg-purple-700 rounded-[7px] mt-2'></div>
          <Link to="/" className='text-white text-[15px]  hover:text-purple-700 transition-all duration-500 mt-3 flex gap-1  items-center cursor-pointer'><p className='text-purple-700'><i className="fa-solid fa-graduation-cap"></i></p>Home</Link>
          <Link to="/build-resume" className='text-white text-[15px]  hover:text-purple-700 transition-all duration-500 mt-3 flex gap-1  items-center cursor-pointer'><p className='text-purple-700'><i className="fa-solid fa-building"></i></p>Build Resume</Link>
          <Link to="/Login" className='text-white text-[15px]  hover:text-purple-700 transition-all duration-500 mt-3 flex gap-1  items-center cursor-pointer'><p className='text-purple-700'><i className="fa-solid fa-right-to-bracket"></i></p>Login</Link>
          <Link to="/Contact" className='text-white text-[15px]  hover:text-purple-700 transition-all duration-500 mt-3 flex gap-1  items-center cursor-pointer'><p className='text-purple-700'><i className="fa-solid fa-phone"></i></p>Contact</Link>
         

         
        </div>
        <div className='h-[220px] w-[230px]'>
          <h1 className='font-bold text-white text-[25px] flex flex-col gap-5'>Contact Us</h1>
          <div className='h-[4px] w-[230px] bg-purple-700 rounded-[7px] mt-2'></div>
          <div className='text-white text-[15px] hover:text-purple-700 transition-all duration-500 mt-3 flex gap-1  items-center '><p className='text-purple-700'><i class="fa-solid fa-phone"></i></p>+91 9307913077</div>
          <div className='text-white text-[15px] hover:text-purple-700 transition-all duration-500 mt-3 flex gap-1  items-center'><p className='text-purple-700'><i class="fa-solid fa-envelope"></i></p>resumecraft111@gmail.co</div>
          <div className='text-white text-[15px] hover:text-purple-700 transition-all duration-500 mt-3 flex gap-1  items-center'><p className='text-purple-700'><i class="fa-solid fa-location-dot"></i></p>Pune ,In</div>
        </div>
      </div>

      <div className='h-[80px] w-[100%] bg-black flex justify-center items-center gap-100 border-t-2 border-gray-400'>
        <h1 className='font-bold text-[18px] text-white'>© 2025 SkyCast. All Rights Reserved.</h1>
        <div className='flex gap-10'>
          <button className='h-[50px] w-[150px] border-2 text-white text-[15px] border-white rounded-[7px] cursor-pointer hover:bg-gray-500/50'>Privacy Policy</button>
           <button className='h-[50px] w-[150px] border-2 text-white text-[15px] border-white rounded-[7px] cursor-pointer hover:bg-gray-500/50'>Terms OF Service</button>
        </div>
      </div>
    </>
  )
}

export default Footer
