import React from 'react'

const Experience1T = () => {
    return (
        <>
           

            <div className='h-[auto] w-screen flex justify-center items-center flex-col gap-10 pt-10 pb-10'>
                
                <div className='h-[auto] bg-white shadow-xl shadow-gray-300 border-t-2 border-sky-500 rounded-[7px] w-[60%] flex justify-center items-center flex-col gap-2 pt-10 pb-10 '>

                    <div className='h-[140px]  w-[90%] border-b-2 border-gray-500 flex justify-center items-center flex-col gap-[2px]'>
                        <h1 className='text-gray-700 text-[35px] font-bold ml-5'>Pratik Sakhare</h1>
                        <div className='flex flex-row gap-2'>
                            <input type='number' placeholder='+123-456-7890' className='h-[20px] w-[130px]   outline-none  placeholder:text-gray-500  text-gray-500  border-r-2 border-gray-500 '></input>
                            <input type='email' placeholder='example@example.com' className='h-[20px] w-[190px]   outline-none  placeholder:text-gray-500  text-gray-500  border-r-2 border-gray-500 '></input>
                            <input type='text' placeholder='linkedin.com/in/alexwebb' className='h-[20px] w-[200px]   outline-none  placeholder:text-gray-500  text-gray-500  border-r-2 border-gray-500 '></input>
                            <input type='text' placeholder='github.com/alexwebbx' className='h-[20px] w-[200px]   outline-none  placeholder:text-gray-500  text-gray-500  border-r-2 border-gray-500 '></input>
                        </div>
                    </div>

                    <div className='h-[170px]  w-[90%] border-b-2 border-gray-500 '>
                        <h1 className='text-gray-700 text-[30px]  font-bold '>Summary</h1>
                        <textarea placeholder='Passionate AI/ML engineer with a strong background in deep learning, computer vision, and natural language processing. Skilled in Python, TensorFlow, PyTorch, and various ML libraries. Excellent problem-solving, research, and collaboration abilities. Seeking a challenging role to develop cutting-edge AI solutions.' className='h-[100px] w-[90%]'></textarea>
                    </div>

                    <div className='h-[160px]  w-[90%] border-b-2 border-gray-500  flex flex-col gap-2'>
                        <h1 className='text-gray-700 text-[30px]  font-bold '>Technical Skills</h1>
                        <div className='flex gap-1'><h1 className='text-black text-[15px]  font-bold'>Programming Languages : </h1><input type='text' placeholder='Python, C++, SQL, MATLAB' className='h-[20px] w-[200px]   outline-none  placeholder:text-gray-500  text-gray-500 '></input></div>
                        <div className='flex gap-1'><h1 className='text-black text-[15px]  font-bold'>Deep Learning Frameworks :  </h1><input type='text' placeholder='TensorFlow, PyTorch, Keras, Caffe' className='h-[20px] w-[200px]   outline-none  placeholder:text-gray-500  text-gray-500 '></input></div>
                        <div className='flex gap-1'><h1 className='text-black text-[15px]  font-bold'>Libraries & Tools : </h1><input type='text' placeholder='NumPy, Pandas, Scikit-learn, OpenCV, NLTK, Git, Docker' className='h-[20px] w-[200px]   outline-none  placeholder:text-gray-500  text-gray-500 '></input></div>
                    </div>

                    <div className='h-[350px]  w-[90%] border-b-2 border-gray-500  flex flex-col gap-2'>
                        <h1 className='text-gray-700 text-[30px]  font-bold '>Projects</h1>
                        <input type='text' placeholder='1 . Image Captioning System' className='h-[20px] w-[200px]   outline-none  placeholder:text-black  font-bold text-black '></input>
                        <input type='text' placeholder='Deep Learning Project' className='h-[20px] w-[200px]   outline-none  placeholder:text-gray-500  text-[13px] text-gray-500 '></input>
                        <input type='text' placeholder='1 . Developed an end-to-end system for generating descriptive captions for images' className='h-[20px] w-[90%]  outline-none  placeholder:text-gray-700  text-[13px] text-gray-700 '></input>
                        <input type='text' placeholder='2 . Utilized CNN and LSTM models for image feature extraction and caption generation' className='h-[20px] w-[90%]   outline-none  placeholder:text-gray-700  text-[13px] text-gray-700 '></input>
                        <input type='text' placeholder='3 .Achieved state-of-the-art performance on the COCO dataset' className='h-[20px] w-[90%]   outline-none  placeholder:text-gray-700  text-[13px] text-gray-700 '></input>
                        <input type='text' placeholder='2 . Sentiment Analysis API' className='h-[20px] w-[200px]   outline-none  placeholder:text-black  font-bold text-black '></input>
                        <input type='text' placeholder='Natural Language Processing' className='h-[20px] w-[200px]   outline-none  placeholder:text-gray-500  text-[13px] text-gray-500 '></input>
                        <input type='text' placeholder='1 . Built a RESTful API for sentiment analysis of text data' className='h-[20px] w-[90%]  outline-none  placeholder:text-gray-700  text-[13px] text-gray-700 '></input>
                        <input type='text' placeholder='2 . Implemented pre-trained transformer models using Hugging Face' className='h-[20px] w-[90%]   outline-none  placeholder:text-gray-700  text-[13px] text-gray-700 '></input>
                        <input type='text' placeholder='3 . Deployed the API on a cloud platform for easy integration' className='h-[20px] w-[90%]   outline-none  placeholder:text-gray-700  text-[13px] text-gray-700 '></input>
                    </div>

                    <div className='h-[350px]  w-[90%] border-b-2 border-gray-500  flex flex-col gap-2'>
                        <h1 className='text-gray-700 text-[30px]  font-bold '>Experience</h1>
                        <input type='text' placeholder='1 . AI Research Intern' className='h-[20px] w-[200px]   outline-none  placeholder:text-black  font-bold text-black '></input>
                        <input type='text' placeholder='DeepMind' className='h-[20px] w-[200px]   outline-none  placeholder:text-gray-500  text-[13px] text-gray-500 '></input>
                        <input type='text' placeholder='1 . Conducted research on reinforcement learning algorithms for robotics' className='h-[20px] w-[90%]  outline-none  placeholder:text-gray-700  text-[13px] text-gray-700 '></input>
                        <input type='text' placeholder='2 . Implemented and evaluated deep RL models using PyTorch and RLLib' className='h-[20px] w-[90%]   outline-none  placeholder:text-gray-700  text-[13px] text-gray-700 '></input>
                        <input type='text' placeholder='3 . Presented findings at weekly research meetings' className='h-[20px] w-[90%]   outline-none  placeholder:text-gray-700  text-[13px] text-gray-700 '></input>
                        <input type='text' placeholder='2 . Machine Learning Engineer' className='h-[20px] w-[200px]   outline-none  placeholder:text-black  font-bold text-black '></input>
                        <input type='text' placeholder='Acme AI Solutions' className='h-[20px] w-[200px]   outline-none  placeholder:text-gray-500  text-[13px] text-gray-500 '></input>
                        <input type='text' placeholder='1 .Developed and deployed machine learning models for various industries' className='h-[20px] w-[90%]  outline-none  placeholder:text-gray-700  text-[13px] text-gray-700 '></input>
                        <input type='text' placeholder='2 . Optimized model performance and ensured data quality' className='h-[20px] w-[90%]   outline-none  placeholder:text-gray-700  text-[13px] text-gray-700 '></input>
                        <input type='text' placeholder='3 . Collaborated with cross-functional teams to deliver AI solutions' className='h-[20px] w-[90%]   outline-none  placeholder:text-gray-700  text-[13px] text-gray-700 '></input>
                    </div>

                    <div className='h-[180px]  w-[90%] border-b-2 border-gray-500  flex flex-col gap-2'>
                        <h1 className='text-gray-700 text-[30px]  font-bold '>Education</h1>
                        <input type='text' placeholder='Stanford University' className='h-[20px] w-[200px]   outline-none  placeholder:text-black  font-bold text-black '></input>
                        <input type='text' placeholder='M.S. in Computer Science, Artificial Intelligence' className='h-[20px] w-[90%]  outline-none  placeholder:text-gray-700  text-[13px] text-gray-700 '></input>
                        <input type='text' placeholder='University of California, Berkeley' className='h-[20px] w-[200px]   outline-none  placeholder:text-black  font-bold text-black '></input>
                        <input type='text' placeholder='B.S. in Electrical Engineering and Computer Science' className='h-[20px] w-[90%]  outline-none  placeholder:text-gray-700  text-[13px] text-gray-700 '></input>
                    </div>

                    <div className='h-[120px]  w-[90%] border-b-2 border-gray-500  flex flex-col gap-2'>
                        <h1 className='text-gray-700 text-[30px]  font-bold '>Education</h1>
                        <input type='text' placeholder='1 . AWS Certified Machine Learninn - Apecialigty'className='h-[20px] w-[500px]   outline-none  placeholder:text-black  font-bold text-black '></input>
                         <input type='text' placeholder='1 . AWS Certified Machine Learninn - Apecialigty'className='h-[20px] w-[500px]   outline-none  placeholder:text-black  font-bold text-black '></input>
                    </div>

                </div>

                <button className='h-[45px] w-[210px] rounded-[7px] font-bold bg-gradient-to-r from-blue-700 to-pink-700 text-white hover:bg-sky-500 hover:scale-110 hover:transition-all duration-5s ease-in-out flex gap-5 justify-center items-center cursor-pointer'><i class="fa-solid fa-download"></i>Download PDF</button>

            </div>

           
        </>
    )
}

export default Experience1T
