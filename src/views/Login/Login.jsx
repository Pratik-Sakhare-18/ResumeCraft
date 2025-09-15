import React from 'react'
import LOGO from '../../assets/resume-craft.png'
import LOGIMG from '../../assets/log-img.avif'

const Login = () => {
  return (
    <>
      <div className='min-h-screen w-screen bg-gradient-to-b from-white to-gray-50 flex justify-center items-center p-4'>

        <div className='w-full max-w-4xl flex flex-col lg:flex-row justify-center items-center gap-10'>

          <div className='hidden lg:flex h-[450px] w-full lg:w-1/2 bg-gradient-to-b from-blue-800 to-purple-900 rounded-tl-[25px] rounded-br-[25px] rounded-tr-[5px] rounded-bl-[5px] animate-fade-slide-in flex-col justify-center'>

            <div className='h-[90px] w-[90%]  flex  items-center gap-5 mt-3'>
              <p className='text-2xl font-bold text-center text-white ml-10'><i class="fa-solid fa-bars"></i></p>
              <div>
                <h1 className='text-2xl font-bold text-center text-white flex gap-1'>Resume<p className='text-2xl font-bold text-center text-blue-600'>Craft</p></h1>
                <p className='text-[12px] font-bold  text-gray-300 '>Create polished resumes in minutes. Sign in to<br /> continue.</p>
              </div>
            </div>

            <h1 className='text-2xl font-bold text-center text-black flex gap-1 ml-10 mt-0'>Welcome Back  👋</h1>
            <p className='text-[10px] font-bold  text-gray-300 ml-10 pt-1'>Pick up where you left off — your drafts, templates, and<br /> exported PDFs are waiting.</p>

            <div className='h-[200px] w-[350px]  rounded-bl-[14px] rounded-tr-[14px] ml-10 mt-5 '>
              <img src={LOGIMG} alt='log-img' className='h-full w-full object-cover rounded-bl-[14px] rounded-tr-[14px] rounded-br-[7px] rounded-tl-[7px]' />
            </div>

          </div>

          <div className='h-auto w-full max-w-md lg:w-1/2 bg-gradient-to-b from-blue-800 to-purple-900 rounded-tl-[25px] rounded-br-[25px] rounded-tr-[5px] rounded-bl-[5px] flex justify-center flex-col gap-2 p-8 animate-fade-slide-in' style={{ animationDelay: '0.2s' }}>

            <h1 className=' text-[21px] text-white font-bold flex justify-center items-center gap-2 '><div className='bg-amber-400 h-[50px] w-[50px] rounded-full shadow-2xl shadow-gray-200 flex items-center justify-center overflow-hidden'>
              <img src={LOGO} alt="Logo" width="300" className='border-2 border-blue-500 rounded-full' />
            </div>Sign in to Resume<p className='flex gap-1 text-[21px] text-blue-600 font-bold text-center'>Craft</p></h1>
            <p className=' gap-1 text-[10px] text-white text-center flex justify-center items-center'>Use your email and password or continue with a<br />social account.</p>

            <form className='flex gap-2 flex-col justify-center items-center width-full '>

              <div className='flex flex-col'>
                <label className='text-white mb-1'>Email</label>
                <input type='email' required placeholder='Enter your email' className='bg-white h-[50px] w-full rounded-[7px] outline-none px-3 border-2 border-gray-300 '></input>
              </div>

              <div className='flex flex-col w-full max-w-xs'>
                <label className='text-white mb-1'>Password</label>
                <input type='password' required placeholder='Enter Password' className='bg-white h-[50px] w-full rounded-[7px] outline-none px-3 border-2 border-gray-300 '></input>
              </div>

              <div class="flex items-center justify-center gap-10 text-sm text-gray-300">
                <label className="flex items-center gap-2"><input type="checkbox" class="form-checkbox h-4 w-4 text-indigo-500 rounded" /> Remember me</label>
                <a href="#" class="hover:underline">Forgot password?</a>
              </div>

              <div className='flex justify-center items-center w-full max-w-xs'>
                <button type="submit" class="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-900 text-white font-semibold shadow-md hover:scale-[1.01] transform transition cursor-pointer">Sign in</button>
              </div>

              <div class="flex items-center gap-3 text-sm text-gray-400">
                <div className="h-px bg-white/10 flex-1"></div>
                <div>Or continue with</div>
                <div className="h-px bg-white/10 flex-1"></div>
              </div>

              <div class="grid grid-cols-2 gap-3 mt-2">
                <button type="button" className="py-2 w-[130px] rounded-lg border border-white/10 flex items-center justify-center gap-2 text-sm bg-white/4 ">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  Google
                </button>

                <button type="button" class="py-2 rounded-lg border border-white/10 flex items-center justify-center gap-2 text-sm bg-white/4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l3 7h7l-6 4 2 7-6-4-6 4 2-7L2 9h7l3-7z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  LinkedIn
                </button>
              </div>

              <p class="text-xs text-gray-400 text-center">Don't have an account? <a href="#" class="text-white hover:underline font-medium">Create one</a></p>

              <footer className="mt-6 text-xs text-gray-500 text-center">© <span id="year"></span> Resume Craft</footer>

            </form>

          </div>

        </div>

      </div>

    </>
  )
}

export default Login
