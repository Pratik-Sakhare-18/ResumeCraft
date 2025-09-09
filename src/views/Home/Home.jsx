import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import logo from '../../assets/resume-craft.png'

const Home = () => {

    return (
        <>

            <div className='h-[300px] w-[100%] bg-gradient-to-r from-blue-600 to-purple-700 mt-[20px] flex items-center justify-center gap-20 flex-col'>
                <div className='h-[300px] w-[70%] flex  justify-center gap-5 flex-col'>
                    <h1 className='text-5xl text-white font-bold'>Create Your Professional Resume</h1>
                    <p className='text-1xl text-gray-300 font-bold mt-[5px]'>Stand out from the crowd with our professionally designed resume<br></br> templates. Perfect for freshers and experienced professionals.</p>
                    <Link to={'/BuildResume'}>
                        <button className='get-started-btn h-[50px] w-[170px] rounded-[10px] text-amber-50 font-bold cursor-pointer flex gap-2 items-center justify-center border-2 border-white hover:scale-120 transition-all duration-300 '><i class="fa-solid fa-rocket"></i>Start Building</button>
                    </Link>

                    <div className='h-[180px]  w-[180px] bg-amber-800 absolute top-100px right-50 rounded-[10px] overflow-hidden'>
                        <img src={logo} alt="logo" ></img>
                    </div>
                </div>
            </div>

            <div className='h-[360px] w-[100%] bg-white flex items-center justify-center flex-col gap-15'>
                <h1 className='main-heading2 text-5xl font-bolder'>What Makes ResumeCraft Different?</h1>
                <div className='h-[200x] w-[100%] flex items-center justify-center gap-20 flex-row'>
                    
                    <div className='cards h-[130px] w-[17%] bg-white shadow-1xl shadow-gray-600 rounded-[10px] border-b-4 border-blue-700 flex items-center justify-center flex-col gap-2'>
                        <h2 className='text-[20px] font-bold text-blue-800'>⚡Quick & Simple</h2>
                        <p className='text-gray-500  text-[14px] text-center'>Our easy editor lets you build<br /> resumes faster than ever before.</p>
                    </div>

                    <div className='cards h-[130px] w-[17%] bg-white shadow-1xl shadow-gray-500 rounded-[10px] border-b-4 border-blue-700 flex items-center justify-center flex-col gap-2'>
                        <h2 className='text-[20px] font-bold text-blue-800'>🎨 Stylish Templates</h2>
                        <p className='text-gray-500  text-[14px] text-center'>Choose from modern designs<br /> tailored to your career field.</p>
                    </div>

                    <div className='cards h-[130px] w-[17%] bg-white shadow-1xl shadow-gray-500 rounded-[10px] border-b-4 border-blue-700 flex items-center justify-center flex-col gap-2'>
                        <h2 className='text-[20px] font-bold text-blue-800'>📥 Instant Download</h2>
                        <p className='text-gray-500  text-[14px] text-center'>Export your resume in high-<br />quality PDF format instantly.</p>
                    </div>

                    <div className='cards h-[130px] w-[17%] bg-white shadow-1xl shadow-gray-500 rounded-[10px] border-b-4 border-blue-700 flex items-center justify-center flex-col gap-2'>
                        <h2 className='text-[20px] font-bold text-blue-800'>💼 Job-Ready</h2>
                        <p className='text-gray-500  text-[14px] text-center'>Resumes designed to pass ATS<br />filters and impress employers.</p>
                    </div>

                </div>
            </div>

            <div className='h-[300px] w-[100%] bg-sky-50 flex items-center justify-center flex-col gap-2'>
                <h1 className='text-4xl font-bold text-center'>Choose Your Template</h1>
                <div className='h-[4px] w-[340px] bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl'></div>
                <p className='text-gray-500 text-center text-[16px] mt-5'>Select from our collection of professionally designed templates. Whether you're a fresher or an<br /> experienced professional, we have the perfect template for you.</p>
                <Link to='/ChooseT'>
                    <button className='h-[60px] w-[200px] rounded-[10px]  bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold cursor-pointer hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600 mt-5 shadow-2xs shadow-gray-600'>Choose Template</button>
                </Link>
            </div>

        </>
    )
}

export default Home
