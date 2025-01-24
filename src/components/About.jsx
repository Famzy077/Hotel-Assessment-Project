// import React from 'react' 
import customer1 from '../images/customar1.png'

const About = () => {
  return (
    <div>
        <main className='flex about_section'>
            <div className='image_box mr-10 w-[35%]'>
                <div className='w-[fit-content]'>
                    <img  className='' src={customer1} alt="" />
                </div>
                <div className='year_box bg-blue-gray-800 mx-5 p-6 text-center text-white rounded-lg text-4xl font-semibold translate-y-[-34%]'>
                    <h1>25 Years of Service Experience</h1>
                </div>
                
            </div>
            <div className='maintext ml-5 w-[34%]'>
                <h2 className='font-semibold text-yellow-800'>About our company</h2>
                <h1 className='text-3xl font-semibold font-sans text-blue-gray-900 pb-8'>Make the customer the hero of your story</h1>
                <p className='text-gray-800 py-8 pr-5 pt-0 text-xl'>Lorem ipsum dolor sit amet, consectetur adipisic- ing elit, sed do eiusmod tempor inc.</p>
                <p className='text-gray-700 py-5 pt-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                <button className='bg-yellow-600 text-center p-4 px-8 rounded-lg'>Learn More <i className="fa-solid fa-angle-right translate-y-[17%]"></i></button>
            </div>
        </main>
    </div>
  )
}

export default About
