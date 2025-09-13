import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import logo from '../../assets/resume-craft.png'

const Home = () => {

    return (
        <>

            <div className='w-full bg-gradient-to-r from-blue-600 to-purple-700 mt-5 p-8 md:p-0 md:h-[300px] flex items-center justify-center'>
                <div className='w-full lg:w-[70%] flex justify-center gap-5 flex-col text-center md:text-left relative'>
                    <h1 className='text-3xl md:text-5xl text-white font-bold'>Create Your Professional Resume</h1>
                    <p className='text-lg text-gray-300 font-bold mt-2'>Stand out from the crowd with our professionally designed resume templates. Perfect for freshers and experienced professionals.</p>
                    <Link to={'/Build-Resume'}>
                        <button className='get-started-btn h-[50px] w-[170px] rounded-[10px] text-amber-50 font-bold cursor-pointer flex gap-2 items-center justify-center border-2 border-white hover:scale-110 transition-all duration-300 mx-auto md:mx-0 mt-4'><i className="fa-solid fa-rocket"></i>Start Building</button>
                    </Link>

                    <div className='hidden lg:block h-[180px] w-[180px] bg-amber-800 absolute top-1/2 -translate-y-1/2 right-0 rounded-[10px] overflow-hidden'>
                        <img src={logo} alt="logo" className='h-full w-full object-cover'></img>
                    </div>
                </div>
            </div>

            <div className='w-full bg-white flex items-center justify-center flex-col gap-8 py-12 px-4'>
                <h1 className='main-heading2 text-3xl md:text-5xl font-bold text-center'>What Makes ResumeCraft Different?</h1>
                <div className='w-full flex items-center justify-center gap-8 md:gap-12 lg:gap-20 flex-wrap'>
                    
                    <div className='cards h-auto md:h-[130px] w-full sm:w-[40%] md:w-[20%] lg:w-[17%] bg-white shadow-lg shadow-gray-400 rounded-[10px] border-b-4 border-blue-700 flex items-center justify-center flex-col gap-2 p-4'>
                        <h2 className='text-[20px] font-bold text-blue-800'>⚡Quick & Simple</h2>
                        <p className='text-gray-500 text-[14px] text-center'>Our easy editor lets you build resumes faster than ever before.</p>
                    </div>

                    <div className='cards h-auto md:h-[130px] w-full sm:w-[40%] md:w-[20%] lg:w-[17%] bg-white shadow-lg shadow-gray-400 rounded-[10px] border-b-4 border-blue-700 flex items-center justify-center flex-col gap-2 p-4'>
                        <h2 className='text-[20px] font-bold text-blue-800'>🎨 Stylish Templates</h2>
                        <p className='text-gray-500 text-[14px] text-center'>Choose from modern designs tailored to your career field.</p>
                    </div>

                    <div className='cards h-auto md:h-[130px] w-full sm:w-[40%] md:w-[20%] lg:w-[17%] bg-white shadow-lg shadow-gray-400 rounded-[10px] border-b-4 border-blue-700 flex items-center justify-center flex-col gap-2 p-4'>
                        <h2 className='text-[20px] font-bold text-blue-800'>📥 Instant Download</h2>
                        <p className='text-gray-500 text-[14px] text-center'>Export your resume in high-quality PDF format instantly.</p>
                    </div>

                    <div className='cards h-auto md:h-[130px] w-full sm:w-[40%] md:w-[20%] lg:w-[17%] bg-white shadow-lg shadow-gray-400 rounded-[10px] border-b-4 border-blue-700 flex items-center justify-center flex-col gap-2 p-4'>
                        <h2 className='text-[20px] font-bold text-blue-800'>💼 Job-Ready</h2>
                        <p className='text-gray-500 text-[14px] text-center'>Resumes designed to pass ATS filters and impress employers.</p>
                    </div>

                </div>
            </div>

            <div className='w-full bg-sky-50 flex items-center justify-center flex-col gap-4 p-8 text-center'>
                <h1 className='text-3xl md:text-4xl font-bold'>Choose Your Template</h1>
                <div className='h-[4px] w-full max-w-[340px] bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl'></div>
                <p className='text-gray-500 text-[16px] mt-4 max-w-2xl'>Select from our collection of professionally designed templates. Whether you're a fresher or an experienced professional, we have the perfect template for you.</p>
                <Link to='/ChooseT'>
                    <button className='h-[60px] w-[200px] rounded-[10px] bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold cursor-pointer hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600 mt-5 shadow-md'>Choose Template</button>
                </Link>
            </div>

        </>
    )
}

export default Home
