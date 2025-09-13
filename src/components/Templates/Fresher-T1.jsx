import React, { useState } from 'react'

const Fresher1T = () => {

    const [formData, setFormData] = useState({
        name: "",
        location: "",
        title: ""
    });

    const UpdatePreview = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    
    return (
        <>
            <div className='h-[auto]  w-screen flex justify-center gap-10 pt-10 pb-10'>

                <div className='h-[600px] w-[290px] bg-blue-900 rounded-[7px] flex flex-col items-center justify-center gap-3 shadow-2xl shadow-gray-400'>
                    <h1 className='font-bold text-[20px] text-white'>RESUME CONTROLS</h1>
                    <input type='text' name="name" value={formData.name} onChange={UpdatePreview} placeholder='+ Your Name' className='h-[45px] w-[80%] rounded-[7px]  flex items-center justify-center text-center outline-none p-5 placeholder:text-white font-bold bg-blue-700 hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out'></input>
                    <input type='text' name="title" value={formData.title} onChange={UpdatePreview} placeholder='+ Your Title' className=' h-[45px] w-[80%] rounded-[7px]  flex items-center justify-center text-center  outline-none p-5 placeholder:text-white font-bold bg-blue-700 hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out'></input>
                    <input type='text' name="location" value={formData.location} onChange={UpdatePreview} placeholder='+ Your Location' className=' h-[45px] w-[80%] rounded-[7px]  flex items-center justify-center text-center  outline-none p-5 placeholder:text-white font-bold bg-blue-700 hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out'></input>
                    <button  className='h-[45px] w-[80%] rounded-[7px] font-bold bg-blue-700 text-white hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out'>+ Add Experience</button>
                    <button  className='h-[45px] w-[80%] rounded-[7px] font-bold bg-blue-700 text-white hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out'>+ Add Education</button>
                    <button  className='h-[45px] w-[80%] rounded-[7px] font-bold bg-blue-700 text-white hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out'>+ Add Projects</button>
                    <button className='h-[45px] w-[80%] rounded-[7px] font-bold bg-blue-700 text-white hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out'>+ Add Skills</button>
                    <button  className='h-[45px] w-[80%] rounded-[7px] font-bold bg-blue-700 text-white hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out'>+ Add Certifications</button>
                    <button className='h-[45px] w-[80%] rounded-[7px] font-bold bg-gradient-to-r from-blue-700 to-pink-700 text-white flex gap-2 items-center justify-center cursor-pointer  hover:scale-110 hover:transition-all duration-5s ease-in-out'><i class="fa-solid fa-download"></i>Download PDF</button>

                </div>

                <div className='h-[auto] w-[50%] bg-white shadow-2xl shadow-gray-400 rounded-[10px] flex flex-col items-center justify-center gap-4 pt-12 pb-12'>

                    <div className='h-[220px] w-[85%]  bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl  flex flex-col items-center justify-center '>
                        <input type='text' name="name" value={formData.name} onChange={UpdatePreview} placeholder='Your Name' className='h-[60px] w-[100%] bg-transparent font-bold text-center placeholder:text-white text-white text-5xl  outline-none'></input>
                        <input type='text' name="title" value={formData.title} onChange={UpdatePreview} placeholder='Your Title' className=' h-[30px] w-[80%] bg-transparent font-bold text-center placeholder:text-white text-white text-[18px] outline-none'></input>
                        <input type='text' name="location" value={formData.location} onChange={UpdatePreview} placeholder='📍 Your Location' className=' h-[30px] w-[80%] bg-transparent font-bold text-center placeholder:text-white text-gray-200 text-[14px] outline-none'></input>
                        <div className='flex gap-5 mt-2'>
                            <button className='h-[40px] w-[120px] bg-white font-bold text-blue-600 rounded-[7px] flex justify-center items-center gap-2 cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-300'><i class="fa-solid fa-user"></i> Linkdin</button>
                            <button className='h-[40px] w-[120px] bg-white font-bold text-blue-600 rounded-[7px] flex justify-center items-center gap-2 cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-300'>💻 GitHub</button>
                        </div>

                    </div>

                    <div className='h-[auto] w-[85%] bg-sky-50 p-6 border-l-5 border-blue-800 rounded-[7px]'>
                        <h2 className='text-blue-800 text-[21px] font-bold mb-4'>Experience</h2>
                    </div>

                    <div className='h-[auto] w-[85%] bg-sky-50 p-6 border-l-5 border-blue-800 rounded-[7px]'>
                        <h2 className='text-blue-800 text-[21px] font-bold mb-4'>Education</h2>
                    </div>

                    <div className='h-[auto] w-[85%] bg-sky-50 p-6 border-l-5 border-blue-800 rounded-[7px]'>
                        <h2 className='text-blue-800 text-[21px] font-bold mb-4'>Projects</h2>
                    </div>

                    <div className='h-[auto] w-[85%] bg-sky-50 p-6 border-l-5 border-blue-800 rounded-[7px]'>
                        <h2 className='text-blue-800 text-[21px] font-bold mb-4'>Technical Skills</h2>
                    </div>

                    <div className='h-[auto] w-[85%] bg-sky-50 p-6 border-l-5 border-blue-800 rounded-[7px]'>
                        <h2 className='text-blue-800 text-[21px] font-bold mb-4'>Certifications</h2>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Fresher1T
