import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import LOGO from '../../assets/resume-craft.png'

const Navbar = () => {
    return (
        <>
            <div className='h-[80px] w-[100%] bg-white-500 shadow-2xl shadow-gray-200 flex items-center justify-center gap-80 '>
                
                <div className='h-[90px] w-[600px] bg-white-500 flex items-center justify-center gap-5 '>
                    <div className='logo-container h-[50px] w-[50px] bg-white-500 rounded-full flex items-center justify-center overflow-hidden shadow-2xl shadow-gray-500 '>
                        <img src={LOGO} alt="Logo" width="300" className='border-2 border-blue-500 rounded-full' />
                    </div>
                    <p className='main-heading'>ResumeCraft</p>

                </div>

                <div className='h-[90px] w-[50%] flex items-center justify-center gap-10 '>

                    <Link to="/" className='nav-anchor text-black-500 text-[17px] font-bold cursor-pointer hover:text-blue-500'>Home</Link>
                    <Link to="/BuildResume" className='nav-anchor text-black-500 text-[17px] font-bold cursor-pointer hover:text-blue-600'>Build-Resume</Link>
                    <button className='pdf-btn h-[40px] w-[100px] bg-red-500 rounded-[7px] flex items-center justify-center gap-2 text-white cursor-pointer shadow-2xl shadow-gray-400 hover:bg-red-600'><i class="fa-solid fa-download"></i>PDF</button>
                    <Link to="/login"><button className='login-btn h-[40px] w-[110px] rounded-[7px] flex items-center justify-center gap-2 text-white cursor-pointer'><i class="fa-solid fa-right-to-bracket"></i>Login</button></Link>

                </div>
            </div>

          
        </>
    )
}

export default Navbar
