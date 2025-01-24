// eslint-disable-next-line no-unused-vars
import React from 'react'
import diningImage from '../images/dining-img.png'
import  diningImage2 from '../images/dining-img2.png'

const Dining = () => {
  return (
    <div className=''>
        <section className='dining flex md:p-0 p-10'>
            <div className='w-[100%]'>
                <img className='md:rounded-none rounded-2xl' src={diningImage} alt="dining table" />  
            </div>
            <div className='rounded-xl md:p-32 p-10 h-[23rem] w-[100%] bg-white bg-transparent opacity-80 translate-y-[22%] md:translate-x-[-20%] translate-x-0'>
                <h1 className='text-2xl font-semibold text-yellow-800'>Our resturent</h1>
                <h1 className='text-2xl m-3 ml-0'>Dining & Drinks</h1>
                <p className='text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                <button className='border-2 border-yellow-800 p-3 px-6 rounded-xl text-yellow-800 m-3 my'>Learn More</button>
            </div>
        </section>

        <div className=' dining flex my-8'>
            <div className='rounded-xl z-10 md:p-32 p-10 h-[23rem] w-[100%] bg-white bg-transparent opacity-80 translate-y-[22%] md:translate-x-[20%] translate-x-0 text-end'>
                <h1 className='text-2xl font-semibold text-yellow-800'>Our Pool</h1>
                <h2 className='text-2xl m-3 ml-0'>Swimming Pool</h2>
                <p className='text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud.</p>
                <button className='border-2 border-yellow-800 p-3 px-6 rounded-xl text-yellow-800 m-2'>Learn More</button>
            </div>
            <div className='h-[70vh] w-[100%]'>
                <img className='' src={diningImage2} alt="dining" />
            </div>
        </div>
    </div>
  )
}

export default Dining
