import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import LOGO from '../../assets/resume-craft.png'

const Navbar = () => {
    const [MenuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className='h-auto w-full bg-white-500 shadow-2xl shadow-gray-200 flex flex-wrap items-center justify-between p-4 md:h-[80px] md:flex-nowrap flex-row'>

                <div className='h-auto w-auto bg-white-500 flex items-center justify-center gap-5  ml-10 '>
                    <div className='logo-container h-[50px] w-[50px] bg-white-500 rounded-full flex items-center justify-center overflow-hidden shadow-2xl shadow-gray-500  '>
                        <img src={LOGO} alt="Logo" width="300" className='border-2 border-blue-500 rounded-full ' />
                    </div>
                    <p className='main-heading'>ResumeCraft</p>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!MenuOpen)}>
                        <i className={`fa-solid ${MenuOpen ? 'fa-times' : 'fa-bars'} text-2xl text-blue-600 cursor-pointer transition-all duration-500 ease-in`}></i>
                    </button>
                </div>

                <div className={`${MenuOpen ? 'flex' : 'hidden'} w-full flex-col ml-20 md:flex md:w-[500px] md:ml-0 md:flex-row items-center justify-end gap-4 md:gap-6 mt-4 md:mt-0 mr-20`}>

                    <Link to="/" className='nav-anchor text-black-500 text-[17px] font-bold cursor-pointer hover:text-blue-500'>Home</Link>
                    <Link to="/Build-Resume" className='nav-anchor text-black-500 text-[17px] font-bold cursor-pointer hover:text-blue-600'>Build-Resume</Link>
                    <button className='pdf-btn h-[40px] w-[100px] bg-red-500 rounded-[7px] flex items-center justify-center gap-2 text-white cursor-pointer shadow-2xl shadow-gray-400 hover:bg-red-600'><i class="fa-solid fa-download"></i>PDF</button>
                    <Link to="/login"><button className='login-btn h-[40px] w-[110px] rounded-[7px] flex items-center justify-center gap-2 text-white cursor-pointer'><i class="fa-solid fa-right-to-bracket"></i>Login</button></Link>

                </div>
            </div>

        </>
    )
}

export default Navbar
