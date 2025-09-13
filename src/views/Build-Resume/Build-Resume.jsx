import React, { useState, useRef } from 'react'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Template = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    position: "",
    company: "",
    exp1: "",
    exp2: "",
    degree: "",
    university: "",
    gpa: "",
    course: "",
    skill: ""
  });

  const previewRef = useRef();

  const UpdatePreview = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>

      <div className='h-[180vh] w-screen flex  justify-center flex-row gap-15 mt-10'>

        <div className='h-[170vh] w-[25%] bg-gradient-to-b from-blue-700 to-purple-800  shadow-2xl shadow-gray-400 rounded-[10px] flex  flex-col items-center justify-center gap-3 '>

          <h1 className='h-[60px] w-[60%]  text-white font-bold text-2xl border-b-4 border-b-cyan-400 flex items-center justify-center  rounded-[10px]'>Resume Controls</h1>

          <input type="text" name="name" value={formData.name} onChange={UpdatePreview} placeholder='+ Your Name' className='bg-white outline-none h-[45px] w-[65%] p-5 pt-5 rounded-[10px] placeholder:text-[14px] font-bold placeholder:text-blue-800 hover:scale-110 transition-all duration-1000 ease-in-out'></input>
          <input type="email" name="email" value={formData.email} onChange={UpdatePreview} placeholder='+ Email' className='bg-white outline-none h-[45px] w-[65%] p-5 pt-5 rounded-[10px] placeholder:text-[14px] font-bold placeholder:text-blue-800 hover:scale-110 transition-all duration-1000 ease-in-out'></input>
          <input type="tel" name="phone" value={formData.phone} onChange={UpdatePreview} placeholder='+ Phone Number' className='bg-white outline-none h-[45px] w-[65%] p-5 pt-5 rounded-[10px] placeholder:text-[14px] font-bold placeholder:text-blue-800 hover:scale-110 transition-all duration-1000 ease-in-out'></input>
          <input type="text" name="location" value={formData.location} onChange={UpdatePreview} placeholder='+ City , Country' className='bg-white outline-none h-[45px] w-[65%] p-5 pt-5 rounded-[10px] placeholder:text-[14px] font-bold placeholder:text-blue-800 hover:scale-110 transition-all duration-1000 ease-in-out'></input>
          <input type="text" name="summary" value={formData.summary} onChange={UpdatePreview} placeholder='+ Professional Summary' className='bg-white outline-none h-[45px] w-[65%] p-5 pt-5 rounded-[10px] placeholder:text-[14px] font-bold placeholder:text-blue-800 hover:scale-110 transition-all duration-1000 ease-in-out'></input>

          <h1 className='h-[50px] w-[65%]  text-white font-bold text-[20px] border-b-4 border-b-cyan-400 flex items-center justify-center  rounded-[10px]'>WORK EXPERIENCE</h1>

          <input type="text" name="position" value={formData.position} onChange={UpdatePreview} placeholder='+ Senior Position' className='bg-white outline-none h-[45px] w-[65%] p-5 pt-5 rounded-[10px] placeholder:text-[14px] font-bold placeholder:text-blue-800 hover:scale-110 transition-all duration-1000 ease-in-out'></input>
          <input type="text" name="company" value={formData.company} onChange={UpdatePreview} placeholder='+ Company Name' className='bg-white outline-none h-[45px] w-[65%] p-5 pt-5 rounded-[10px] placeholder:text-[14px] font-bold placeholder:text-blue-800 hover:scale-110 transition-all duration-1000 ease-in-out'></input>
          <input type="text" name="exp1" value={formData.exp1} onChange={UpdatePreview} placeholder='+ lead cross functional teams' className='bg-white outline-none h-[45px] w-[65%] p-5 pt-5 rounded-[10px] placeholder:text-[14px] font-bold placeholder:text-blue-800 hover:scale-110 transition-all duration-1000 ease-in-out'></input>
          <input type="text" name="exp2" value={formData.exp2} onChange={UpdatePreview} placeholder='+ incrfease team productivity' className='bg-white outline-none h-[45px] w-[65%] p-5 pt-5 rounded-[10px] placeholder:text-[14px] font-bold placeholder:text-blue-800 hover:scale-110 transition-all duration-1000 ease-in-out'></input>

          <h1 className='h-[50px] w-[65%] text-white font-bold text-[20px] border-b-4 border-b-cyan-400 flex items-center justify-center  rounded-[10px]'>EDUCATION</h1>

          <input type="text" name="degree" value={formData.degree} onChange={UpdatePreview} placeholder='+ BSC in Computer Science' className='bg-white outline-none h-[45px] w-[65%] p-5 pt-5 rounded-[10px] placeholder:text-[14px] font-bold placeholder:text-blue-800 hover:scale-110 transition-all duration-1000 ease-in-out'></input>
          <input type="text" name="university" value={formData.university} onChange={UpdatePreview} placeholder='+ Univercity : SPPU' className='bg-white outline-none h-[45px] w-[65%] p-5 pt-5 rounded-[10px] placeholder:text-[14px] font-bold placeholder:text-blue-800 hover:scale-110 transition-all duration-1000 ease-in-out'></input>
          <input type="text" name="gpa" value={formData.gpa} onChange={UpdatePreview} placeholder='+ CGPA : 9.1/9.1' className='bg-white outline-none h-[45px] w-[65%] p-5 pt-5 rounded-[10px] placeholder:text-[14px] font-bold placeholder:text-blue-800 hover:scale-110 transition-all duration-1000 ease-in-out'></input>
          <input type="text" name="course" value={formData.course} onChange={UpdatePreview} placeholder='+ Releavent Cources' className='bg-white outline-none h-[45px] w-[65%] p-5 pt-5 rounded-[10px] placeholder:text-[14px] font-bold placeholder:text-blue-800 hover:scale-110 transition-all duration-1000 ease-in-out'></input>

          <h1 className='h-[50px] w-[65%]  text-white font-bold text-[20px] border-b-4 border-b-cyan-400 flex items-center justify-center  rounded-[10px]'>SKILLS</h1>

          <input type="text" name="skill" value={formData.skill} onChange={UpdatePreview} placeholder='+ Skills ex , Project Management' className='bg-white outline-none h-[45px] w-[65%] p-5 pt-5 rounded-[10px] placeholder:text-[14px] font-bold placeholder:text-blue-800 hover:scale-110 transition-all duration-1000 ease-in-out'></input>

          <button type="button"  className='bg-gradient-to-r from-red-500 to-pink-800 text-[20px] text-white font-bold h-[45px] w-[220px] mt-5 rounded-[10px] flex items-center justify-center gap-2 cursor-pointer hover:scale-105 transition-all duration-1000 ease-in-out'><i className="fa-solid fa-download"></i> Download PDF</button>

        </div>

        <div  className='h-[165vh] w-[55%] bg-white shadow-2xl shadow-gray-400 rounded-[10px] flex items-center justify-center flex-col gap-2'>

          <div className='h-[200px] w-[85%] border-b-2 border-gray-300 mt-5'>
            <form className='form'>
              <input type='text' name="name" value={formData.name} onChange={UpdatePreview} placeholder='Your Name' className='h-[70px] w-[100%] font-bold text-center text-blue-700 text-5xl caret-blue-900 outline-none placeholder:text-blue-600' />
              <input type='text' name="title" value={formData.title} onChange={UpdatePreview} placeholder='Professional Title' className='h-[50px] w-[100%] font-bold text-center text-blue-950 text-2xl caret-blue-900 outline-none placeholder:text-blue-900' />
              <div className='h-[60px] w-[100%] flex items-center justify-center gap-1'>
                <input type='email' name="email" value={formData.email} onChange={UpdatePreview} placeholder='example123@gmail.com' className='h-[50px] w-[30%] text-center placeholder:text-black text-black outline-none' />
                <input type='tel' name="phone" value={formData.phone} onChange={UpdatePreview} placeholder='+1 234 567 890' className='h-[50px] w-[20%] text-center placeholder:text-black text-black outline-none' />
                <input type='text' name="location" value={formData.location} onChange={UpdatePreview} placeholder='city, country' className='h-[50px] w-[25%] text-center placeholder:text-black text-black outline-none' />
              </div>
            </form>
          </div>

          <form className='h-[150px] w-[85%] border-b-2 border-gray-300'>
            <h2 className='font-bold  text-blue-700 text-2xl mt-5'>PROFESSIONAL SUMMARY</h2>
            <input type='text' name="summary" value={formData.summary} onChange={UpdatePreview} placeholder=' A results-driven professional with expertise in... [Your key strengths and career highlights]' className='h-[50px] w-[100%] border-2 border-gray-200 rounded-[5px] p-5 mt-5'></input>
          </form>

          <div className='h-[285px] w-[85%] border-b-2 border-gray-300 flex gap-5 flex-col'>
            <h2 className='font-bold  text-blue-700 text-2xl mt-5'>WORK EXPERIENCE</h2>
            <form className='h-[180px] w-[100%] bg-sky-100 rounded-[10px] hover:translate-y-[-6px] transition-all duration-1000 ease-in-out'>
              <input type='text' name="position" value={formData.position} onChange={UpdatePreview} placeholder='Senior Position' className='h-[35px] w-[100%] placeholder:text-blue-600 text-blue-600 text-[20px] pl-3 mt-4 bg-transparent outline-none'></input>
              <input type='text' name="company" value={formData.company} onChange={UpdatePreview} placeholder='Company Name | 2020 - Present' className='h-[35px] w-[100%] placeholder:text-blue-600 text-blue-700 text-[16px] pl-3 bg-transparent outline-none'></input>
              <input type='text' name="exp1" value={formData.exp1} onChange={UpdatePreview} placeholder='• Led cross-functional teams to deliver high-impact projects' className='h-[35px] w-[100%] placeholder:text-black text-black pl-3 bg-transparent outline-none'></input>
              <input type='text' name="exp2" value={formData.exp2} onChange={UpdatePreview} placeholder='• Increased team productivity by 40% through process improvements' className='h-[35px] w-[100%] placeholder:text-black text-black pl-3 bg-transparent outline-none'></input>
            </form>
          </div>

          <div className='h-[285px] w-[85%] border-b-2 border-gray-300 flex gap-5 flex-col'>
            <h2 className='font-bold  text-blue-700 text-2xl mt-5'>EDUCATION</h2>
            <form className='h-[180px] w-[100%]  bg-sky-100 rounded-[10px] hover:translate-y-[-6px] transition-all duration-1000 ease-in-out'>
              <input type='text' name="degree" value={formData.degree} onChange={UpdatePreview} placeholder='Bachelor of Science in Computer Science' className='h-[35px] w-[100%] placeholder:text-black text-black text-[20px] pl-5 mt-4 bg-transparent outline-none'></input>
              <input type='text' name="university" value={formData.university} onChange={UpdatePreview} placeholder='University Name | 2016 - 2020' className='h-[35px] w-[100%] placeholder:text-blue-800 text-blue-800 text-[16px] pl-6 bg-transparent outline-none'></input>
              <input type='text' name="gpa" value={formData.gpa} onChange={UpdatePreview} placeholder='• Graduated with Honors (GPA: 9.1/9.1)' className='h-[35px] w-[100%] placeholder:text-black text-black pl-5 bg-transparent outline-none'></input>
              <input type='text' name="course" value={formData.course} onChange={UpdatePreview} placeholder='• Relevant Coursework: Data Structures, Algorithms, Software Engineering' className='h-[35px] w-[100%] placeholder:text-black text-black pl-5 bg-transparent outline-none'></input>
            </form>
          </div>

          <div className='h-[200px] w-[85%]  rounded-[10px] '>
            <h2 className='font-bold  text-blue-700 text-2xl mt-5'>SKILLS</h2>
            <form className='h-auto] w-[100%]  border-gray-300 flex   gap-2 flex-wrap'>
              <input type='text' name="skill" value={formData.skill} onChange={UpdatePreview} placeholder='Project Management' className='h-[40px] w-[150px] bg-sky-200 border-2 border-gray-300 font-bold placeholder-blue-700 text-blue-500 text-[13px] pl-2 pr-2 mt-4 rounded-2xl outline-none text-center hover:scale-105 transition-all duration-1000 ease-in-out'></input>
              <input type='text' placeholder='Team Leadership' className='h-[40px] w-[150px] bg-sky-200 border-2 border-gray-300  font-bold placeholder-blue-700 text-blue-500 text-[13px] pl-2 pr-2 mt-4 rounded-2xl outline-none text-center hover:scale-105 transition-all duration-1000 ease-in-out'></input>
              <input type='text' placeholder='Strategic Planning' className='h-[40px] w-[150px] border-2 bg-sky-200 border-gray-300 font-bold placeholder-blue-700 text-blue-500 text-[13px] pl-2 pr-2 mt-4 rounded-2xl outline-none text-center hover:scale-105 transition-all duration-1000 ease-in-out'></input>
              <input type='text' placeholder='Problem Solving' className='h-[40px] w-[150px] border-2 bg-sky-200 border-gray-300 font-bold placeholder-blue-700 text-blue-500 text-[13px] pl-2 pr-2 mt-4 rounded-2xl outline-none text-center hover:scale-105 transition-all duration-1000 ease-in-out'></input>
              <input type='text' placeholder='Debuging' className='h-[40px] w-[150px] border-2 bg-sky-200 border-gray-300 font-bold placeholder-blue-700 text-blue-500 text-[13px] pl-2 pr-2 mt-4 rounded-2xl outline-none text-center hover:scale-105 transition-all duration-1000 ease-in-out'></input>
            </form>
          </div>

        </div>

      </div>

    </>
  )
}

export default Template;
