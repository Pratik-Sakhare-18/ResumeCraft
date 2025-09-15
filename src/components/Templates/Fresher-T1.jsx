import React, { useState } from 'react'

const Fresher1T = () => {

    const [formData, setFormData] = useState({
        name: "",
        title: "",
        location: "",
        educations: [],
        projects: [],
        skills: [],
        certifications: [],
        experiences: [],
    });

    const UpdatePreview = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const addExperienceInput = (index, e) => {
        const { name, value } = e.target;
        const newExperiences = [...formData.experiences];
        newExperiences[index][name] = value;
        setFormData((prevData) => ({ ...prevData, experiences: newExperiences }));
    };

    const addExperience = () => {
        setFormData(prevData => ({
            ...prevData,
            experiences: [
                ...prevData.experiences,
                {
                    company: "",
                    role: "",
                    description: "",
                }
            ]
        }));
    };

    const addEducation = () => {
        setFormData(prevData => ({
            ...prevData,
            educations: [
                ...prevData.educations,
                {
                    degree: "",
                    university: "",
                    date: ""
                }
            ]
        }));
    };

    const UpdateEducation = (index, e) => {
        const { name, value } = e.target;
        const newEducations = [...formData.educations];
        newEducations[index][name] = value;
        setFormData(prevData => ({ ...prevData, educations: newEducations }));
    };

    const addProject = () => {
        setFormData(prevData => ({
            ...prevData,
            projects: [
                ...prevData.projects,
                {
                    name: "",
                    description: ""
                }
            ]
        }));
    };

    const UpdateProject = (index, e) => {
        const { name, value } = e.target;
        const newProjects = [...formData.projects];
        newProjects[index][name] = value;
        setFormData(prevData => ({ ...prevData, projects: newProjects }));
    };

    const addSkill = () => {
        setFormData(prevData => ({ ...prevData, skills: [...prevData.skills, { name: "" }] }));
    };

    const UpdateSkills = (index, e) => {
        const { value } = e.target;
        const newSkills = [...formData.skills];
        newSkills[index].name = value;
        setFormData(prevData => ({ ...prevData, skills: newSkills }));
    };

    const addCertification = () => {
        setFormData(prevData => ({ ...prevData, certifications: [...prevData.certifications, { name: "" }] }));
    };

    const UpdatateCertificate = (index, e) => {
        const { value } = e.target;
        const newCertifications = [...formData.certifications];
        newCertifications[index].name = value;
        setFormData(prevData => ({ ...prevData, certifications: newCertifications }));
    };

    return (
        <>
            <div className='h-auto w-screen flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 pt-10 pb-10 px-4'>

                <div className='h-auto w-full max-w-md lg:w-[290px] lg:h-[600px] bg-blue-900 rounded-[7px] flex flex-col items-center justify-center gap-3 shadow-2xl shadow-gray-400 p-4'>
                    <h1 className='font-bold text-[20px] text-white'>RESUME CONTROLS</h1>
                    <input type='text' name="name" value={formData.name} onChange={UpdatePreview} placeholder='+ Your Name' className='h-[45px] w-[80%] rounded-[7px]  flex items-center justify-center text-center outline-none p-5 placeholder:text-white font-bold bg-blue-700 hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out'></input>
                    <input type='text' name="title" value={formData.title} onChange={UpdatePreview} placeholder='+ Your Title' className=' h-[45px] w-[80%] rounded-[7px]  flex items-center justify-center text-center  outline-none p-5 placeholder:text-white font-bold bg-blue-700 hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out'></input>
                    <input type='text' name="location" value={formData.location} onChange={UpdatePreview} placeholder='+ Your Location' className=' h-[45px] w-[80%] rounded-[7px]  flex items-center justify-center text-center  outline-none p-5 placeholder:text-white font-bold bg-blue-700 hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out'></input>
                    <button onClick={addExperience} className='h-[45px] w-[80%] rounded-[7px] font-bold bg-blue-700 text-white hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out'>+ Add Experience</button>
                    <button onClick={addEducation} className='h-[45px] w-[80%] rounded-[7px] font-bold bg-blue-700 text-white hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out'>+ Add Education</button>
                    <button onClick={addProject} className='h-[45px] w-[80%] rounded-[7px] font-bold bg-blue-700 text-white hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out'>+ Add Projects</button>
                    <button onClick={addSkill} className='h-[45px] w-[80%] rounded-[7px] font-bold bg-blue-700 text-white hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out'>+ Add Skills</button>
                    <button onClick={addCertification} className='h-[45px] w-[80%] rounded-[7px] font-bold bg-blue-700 text-white hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out'>+ Add Certifications</button>
                    <button className='h-[45px] w-[80%] rounded-[7px] font-bold bg-gradient-to-r from-blue-700 to-pink-700 text-white flex gap-2 items-center justify-center cursor-pointer  hover:scale-110 hover:transition-all duration-5s ease-in-out'><i class="fa-solid fa-download"></i>Download PDF</button>

                </div>

                <div className='h-auto w-full lg:w-[50%] bg-white shadow-2xl shadow-gray-400 rounded-[10px] flex flex-col items-center justify-center gap-4 pt-12 pb-12'>

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
                        {formData.experiences.map((exp, index) => (
                            <div key={index} className="mb-4">
                                <input type="text" name="company" value={exp.company} onChange={(e) => addExperienceInput(index, e)} placeholder="Company Name" className="w-full p-2 mb-2  rounded" />
                                <input type="text" name="role" value={exp.role} onChange={(e) => addExperienceInput(index, e)} placeholder="Role" className="w-full p-2 mb-2 rounded" />
                                <textarea name="description" value={exp.description} onChange={(e) => addExperienceInput(index, e)} placeholder="Job Description" className="w-full p-2 rounded"></textarea>
                            </div>
                        ))}

                    </div>

                    <div className='h-[auto] w-[85%] bg-sky-50 p-6 border-l-5 border-blue-800 rounded-[7px]'>
                        <h2 className='text-blue-800 text-[21px] font-bold mb-4'>Education</h2>
                        {formData.educations.map((edu, index) => (
                            <div key={index} className="mb-4">
                                <input type="text" name="degree" value={edu.degree} onChange={(e) => UpdateEducation(index, e)} placeholder="Degree" className="w-full p-2 mb-2 rounded" />
                                <input type="text" name="university" value={edu.university} onChange={(e) => UpdateEducation(index, e)} placeholder="University" className="w-full p-2 mb-2 rounded" />
                                <input type="text" name="date" value={edu.date} onChange={(e) => UpdateEducation(index, e)} placeholder="Date (e.g., 2020-2024)" className="w-full p-2  rounded" />
                            </div>
                        ))}
                    </div>

                    <div className='h-[auto] w-[85%] bg-sky-50 p-6 border-l-5 border-blue-800 rounded-[7px]'>
                        <h2 className='text-blue-800 text-[21px] font-bold mb-4'>Projects</h2>
                        {formData.projects.map((proj, index) => (
                            <div key={index} className="mb-4">
                                <input type="text" name="name" value={proj.name} onChange={(e) => UpdateProject(index, e)} placeholder="Project Name" className="w-full p-2 mb-2  rounded" />
                                <textarea name="description" value={proj.description} onChange={(e) => UpdateProject(index, e)} placeholder="Project Description" className="w-full p-2 rounded"></textarea>
                            </div>
                        ))}
                    </div>

                    <div className='h-[auto] w-[85%] bg-sky-50 p-6 border-l-5 border-blue-800 rounded-[7px]'>
                        <h2 className='text-blue-800 text-[21px] font-bold mb-4'>Technical Skills</h2>
                        {formData.skills.map((skill, index) => (
                            <div key={index} className="mb-2">
                                <input type="text" name="name" value={skill.name} onChange={(e) => UpdateSkills(index, e)} placeholder="Skill" className="w-full p-2  rounded" />
                            </div>
                        ))}
                    </div>

                    <div className='h-[auto] w-[85%] bg-sky-50 p-6 border-l-5 border-blue-800 rounded-[7px]'>
                        <h2 className='text-blue-800 text-[21px] font-bold mb-4'>Certifications</h2>
                        {formData.certifications.map((cert, index) => (
                            <div key={index} className="mb-2">
                                <input type="file" name="name" value={cert.name} onChange={(e) => UpdatateCertificate(index, e)} placeholder="Certification" className="w-full p-2  rounded" />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Fresher1T
