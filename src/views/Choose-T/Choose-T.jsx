import React from 'react'
import { Link } from 'react-router-dom'
import FresherT1 from '../../assets/Fresher1T.png'
import FresherT2 from '../../assets/Fresher2T.png'
import ExperiencedT from '../../assets/ExperiencedT.png'



const ChooseT = () => {
    return (
        <>

            <div className='h-auto w-screen bg-white flex justify-center items-center flex-col gap-5'>

                <div className='h-[300px] w-[100%] bg-sky-50 flex items-center justify-center flex-col gap-2'>
                    <h1 className='text-4xl font-bold text-center'>Choose Your Template</h1>
                    <div className='h-[4px] w-[340px] bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl'></div>
                    <p className='text-gray-500 text-center text-[16px] mt-5'>Select from our collection of professionally designed templates. Whether you're a fresher or an<br /> experienced professional, we have the perfect template for you.</p>
                    <Link to="/template/fresher-1">
                        <button className='h-[60px] w-[200px] rounded-[10px]  bg-gradient-to-r from-blue-700 to-pink-600 text-white font-bold cursor-pointer hover:bg-gradient-to-r hover:from-pink-600 hover:to-blue-600 mt-5 shadow-2xs shadow-gray-600'>Freshers Template</button>
                    </Link>

                </div>

                <div className='h-[650px] w-screen bg-white flex gap-10 justify-center items-center'>

                    <div className='h-[600px] w-[350px] bg-white rounded-tr-3xl rounded-bl-3xl rounded-tl-[5px] rounded-br-[5px] flex items-center justify-center flex-col overflow-hidden shadow-xl shadow-gray-200'>
                        <div className='h-[360px] w-[100%] bg-gray-100 overflow-hidden'>
                            <img src={FresherT1} alt='Fresher Template 1 Preview' className='h-[360px] w-[100%] object-cover hover:scale-110 transition-all duration-500 ease-in-out ' />
                        </div>
                        <div className='h-[240px] w-[100%] flex  justify-center flex-col gap-1'>
                            <h1 className='text-purple-600 font-bold text-[22px] ml-5'>Fresher Template 1</h1>
                            <p className='text-gray-600 text-[15px] ml-5'>Perfect for fresh graduates. Highlights your ,<br /> education, skills, and potential in a clean ,<br /> professional format</p>
                            <Link to="/template/fresher-1">
                                <button className='h-[60px] w-[300px] rounded-[10px]  bg-gradient-to-r from-blue-700 to-purple-600 text-white font-bold cursor-pointer hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 mt-5 shadow-2xs shadow-gray-600 ml-5'>Use Template</button>
                            </Link>
                        </div>
                    </div>

                    <div className='h-[600px] w-[350px] bg-white rounded-tr-3xl rounded-bl-3xl rounded-tl-[5px] rounded-br-[5px] flex items-center justify-center flex-col overflow-hidden shadow-xl shadow-gray-200'>
                        <div className='h-[360px] w-[100%] bg-gray-100 overflow-hidden'>
                            <img src={FresherT2} alt='Student Resume Template Preview' className='h-[360px] w-[100%] object-cover hover:scale-110 transition-all duration-500 ease-in-out ' />
                        </div>
                        <div className='h-[240px] w-[100%] flex  justify-center flex-col gap-1'>
                            <h1 className='text-purple-600 font-bold text-[22px] ml-5'>Studednt Resume</h1>
                            <p className='text-gray-600 text-[15px] ml-5'>Perfect for students looking for internships.<br /> Showcases your academic achievements and<br /> learning potential</p>
                            <Link to="/template/fresher-2">
                                <button className='h-[60px] w-[300px] rounded-[10px]  bg-gradient-to-r from-blue-700 to-purple-600 text-white font-bold cursor-pointer hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 mt-5 shadow-2xs shadow-gray-600 ml-5'>Use Template</button>
                            </Link>
                        </div>
                    </div>

                </div>

                <button className='h-[60px] w-[200px] rounded-[10px]  bg-gradient-to-r from-blue-700 to-pink-600 text-white font-bold cursor-pointer hover:bg-gradient-to-r hover:from-pink-600 hover:to-blue-600 mt-5 shadow-2xs shadow-gray-600'>Experienced Template</button>

                <div className='h-[650px] w-screen bg-white flex gap-10 justify-center items-center'>

                    <div className='h-[600px] w-[350px] bg-white rounded-tr-3xl rounded-bl-3xl rounded-tl-[5px] rounded-br-[5px] flex items-center justify-center flex-col overflow-hidden shadow-xl shadow-gray-200'>
                        <div className='h-[360px] w-[100%] bg-gray-100 overflow-hidden'>
                            <img src={ExperiencedT} alt='Professional Experience Template Preview' className='h-[360px] w-[100%] object-cover hover:scale-110 transition-all duration-500 ease-in-out ' />
                        </div>
                        <div className='h-[240px] w-[100%] flex  justify-center flex-col gap-1'>
                            <h1 className='text-purple-600 font-bold text-[20px] ml-5'>Professional Experience Template</h1>
                            <p className='text-gray-600 text-[15px] ml-5'>Perfect for showcasing your professional<br /> journey and achievements.</p>
                            <Link to="/template/experienced-1">
                                <button className='h-[60px] w-[300px] rounded-[10px]  bg-gradient-to-r from-blue-700 to-purple-600 text-white font-bold cursor-pointer hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 mt-5 shadow-2xs shadow-gray-600 ml-5'>Use Template</button>
                            </Link>
                        </div>
                    </div>

                    <div className='h-[600px] w-[350px] bg-white rounded-tr-3xl rounded-bl-3xl rounded-tl-[5px] rounded-br-[5px] flex items-center justify-center flex-col overflow-hidden shadow-xl shadow-gray-200'>
                        <div className='h-[360px] w-[100%] bg-gray-100 overflow-hidden'>
                            <img src={ExperiencedT} alt='Executive Experience Template Preview' className='h-[360px] w-[100%] object-cover hover:scale-110 transition-all duration-500 ease-in-out ' />
                        </div>
                        <div className='h-[240px] w-[100%] flex  justify-center flex-col gap-1'>
                            <h1 className='text-purple-600 font-bold text-[20px] ml-5'>Executive Experience Template</h1>
                            <p className='text-gray-600 text-[15px] ml-5'>Designed for senior professionals and<br /> executives.</p>
                            <Link to="/template/experienced-1">
                                <button className='h-[60px] w-[300px] rounded-[10px]  bg-gradient-to-r from-blue-700 to-purple-600 text-white font-bold cursor-pointer hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 mt-5 shadow-2xs shadow-gray-600 ml-5'>Use Template</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>



        </>
    )
}

export default ChooseT
