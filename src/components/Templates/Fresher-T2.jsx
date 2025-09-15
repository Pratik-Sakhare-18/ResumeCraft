import React, { useState } from 'react'

const Fresher2T = () => {

    const [profileImage, setProfileImage] = useState(null);

    const UploadImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfileImage(event.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <>
           

            <div className='h-auto w-screen flex justify-center items-center flex-col gap-10 p-4 md:p-10'>

                <div className='h-auto bg-white  shadow-xl shadow-gray-300 border-t-2 border-sky-500 rounded-[7px] w-full md:w-3/4 lg:w-[50%] flex justify-center items-center flex-col gap-2 pt-10 pb-10 '>

                    <div className='h-[295px]  w-[90%] border-b-2 border-sky-500 flex justify-center items-center flex-col gap-[2px]'>
                        <label htmlFor="profile-image-upload" className='cursor-pointer'>
                            <div className='h-[120px] w-[120px] rounded-full bg-gray-200 overflow-hidden flex justify-center items-center'>
                                {profileImage ? (
                                    <img src={profileImage} alt="Profile" className='h-full w-full object-cover' />
                                ) : (
                                    <span className='text-gray-500 text-sm text-center'>Upload Image</span>
                                )}
                            </div>
                        </label>

                        <input id="profile-image-upload" type="file" accept="image/*" onChange={UploadImage} className="hidden" />
                        <input type='text' placeholder='Pratik Sakhare' className='h-[10px] w-[80%] rounded-[7px]  flex items-center justify-center placeholder:text-black text-black text-center outline-none p-3  font-bold'></input>
                        <input type='text' placeholder='SoftWare Engineer' className='h-[10px] w-[80%] rounded-[7px]  flex items-center justify-center text-center outline-none p-3  font-bold'></input>
                        <input type='tel' placeholder='+123-456-7899' className='h-[10px] w-[80%] rounded-[7px]  flex items-center justify-center text-center outline-none p-3  font-bold'></input>
                        <input type='email' placeholder='Email:resume@example.coms' className='h-[10px] w-[80%] rounded-[7px]  flex items-center justify-center text-center outline-none p-3  font-bold'></input>
                        <input type='text' placeholder='Address: 123 Anywhere St., Any City, ST 12345' className='h-[10px] w-[80%] rounded-[7px]  flex items-center justify-center text-center outline-none p-3  font-bold'></input>
                        <input type='link' placeholder='Portfolio: www.reallygreatsite.com' className='h-[10px] w-[80%] rounded-[7px]  flex items-center justify-center text-center outline-none p-3  font-bold'></input>

                    </div>

                    <div className='h-[120px]  w-[90%] border-b-2 border-sky-500 flex  flex-col gap-[2px]'>
                        <h1 className='text-sky-500 text-[20px] font-bold ml-5'>Professional Summary</h1>
                        <textarea placeholder='Highly motivated mechanical engineer with expertise in developing advanced materials, optimizing manufacturing processes, and leading cross-functional teams. Passionate about innovation and problem-solving in engineering solutions' className='h-[80px] ml-5'></textarea>
                    </div>

                    <div className='h-[150px]  w-[90%] border-b-2  border-sky-500 flex  flex-col gap-[2px]'>
                        <h1 className='text-sky-500 text-[20px] font-bold ml-5'>Professional Experience</h1>
                        <input type='text' placeholder='Science and Tech Co. - Research and Development Engineer (2030-2035)' className='h-[10px] w-[90%] rounded-[7px]  outline-none p-3 placeholder:text-black font-bold text-black ml-2'></input>
                        <input type='text' placeholder='Designed and developed scalable software solutions.' className='h-[10px] w-[90%] rounded-[7px]  outline-none p-3  font-bold ml-2'></input>
                        <input type='text' placeholder='mplemented data processing and analysis tools.' className='h-[10px] w-[90%] rounded-[7px]  outline-none p-3  font-bold ml-2'></input>
                        <input type='text' placeholder='Collaborated with cross-functional teams' className='h-[10px] w-[90%] rounded-[7px]  outline-none p-3  font-bold ml-2'></input>
                    </div>

                    <div className='h-[100px]  w-[90%] border-b-2 border-sky-500 flex  flex-col gap-[2px]'>
                        <h1 className='text-sky-500 text-[20px] font-bold ml-5'>Education</h1>
                        <input type='text' placeholder='SPPU Univercity - Master Of Science In Computer Science' className='h-[10px] w-[90%] rounded-[7px]  outline-none p-3 placeholder:text-black font-bold text-black ml-2'></input>
                        <input type='text' placeholder='NACSCS College - BSC In Computer Science' className='h-[10px] w-[90%] rounded-[7px]  outline-none p-3 placeholder:text-black font-bold text-black ml-2'></input>
                    </div>


                    <div className='h-[150px]  w-[90%] border-b-2 border-sky-500 flex  flex-col gap-[2px]'>
                        <h1 className='text-sky-500 text-[20px] font-bold ml-5'>Skills</h1>
                        <input type='text' placeholder='Programming Languages: Python, Java, C++, JavaScript' className='h-[10px] w-[90%] rounded-[7px]  outline-none p-3  font-bold ml-2'></input>
                        <input type='text' placeholder='Web Development: MERN FULL STACK DEVELOPER' className='h-[10px] w-[90%] rounded-[7px]  outline-none p-3  font-bold ml-2'></input>
                        <input type='text' placeholder='Data Science: Machine Learning, Data Visualization' className='h-[10px] w-[90%] rounded-[7px]  outline-none p-3  font-bold ml-2'></input>
                        <input type='text' placeholder='Tools : GIT & GitHub' className='h-[10px] w-[90%] rounded-[7px]  outline-none p-3  font-bold ml-2'></input>
                    </div>

                    <div className='h-[100px]  w-[90%] border-b-2  border-sky-500 flex  flex-col gap-[2px]'>
                        <h1 className='text-sky-500 text-[20px] font-bold ml-5'>Certificates</h1>
                        <input type='text' placeholder='Project Management - The Project Management Institute (2027)' className='h-[10px] w-[90%] rounded-[7px]  outline-none p-3  font-bold ml-2'></input>
                        <input type='text' placeholder='MERN : FULL Stack Dev With Java' className='h-[10px] w-[90%] rounded-[7px]  outline-none p-3  font-bold ml-2'></input>
                    </div>

                    <div className='h-[100px]  w-[90%] border-b-2 border-sky-500 flex  flex-col gap-[2px]'>
                        <h1 className='text-sky-500 text-[20px] font-bold ml-5'>Projects</h1>
                        <input type='text' placeholder='Online Resume Builder' className='h-[10px] w-[90%] rounded-[7px]  outline-none p-3  font-bold ml-2'></input>
                        <input type='text' placeholder='Sky Cast Weather App' className='h-[10px] w-[90%] rounded-[7px]  outline-none p-3  font-bold ml-2'></input>
                    </div>

                </div>

                <button className='h-[45px] w-[210px] rounded-[7px] font-bold bg-gradient-to-r from-blue-700 to-pink-700 text-white hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out flex gap-5 justify-center items-center cursor-pointer'><i class="fa-solid fa-download"></i>Download PDF</button>
                
            </div>

            

        </>
    )
}

export default Fresher2T
