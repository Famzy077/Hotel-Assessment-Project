// import React from 'react'
import room1 from '../images/room1.jpg'
import room2 from '../images/room2.jpg'
import room3 from '../images/room3.jpg'
import room4 from '../images/room4.jpg'
import room5 from '../images/room5.jpg'
import room6 from '../images/room6.jpg'
// eslint-disable-next-line no-unused-vars
const roomData = [
    {
        id: 1,
        title: 'Classic Double Bed',
        price: '100/par night',
        image: '../images/room1.jpg'
    },
    {
        id: 1,
        title: 'Classic Double Bed',
        price: '100/par night',
        image: '../images/room2.jpg'
    },
    {
        id: 1,
        title: 'Classic Double Bed',
        price: '100/par night',
        image: '../images/room3.jpg'
    },
    {
        id: 1,
        title: 'Classic Double Bed',
        price: '100/par night',
        image: '../images/room4.jpg'
    },
    {
        id: 1,
        title: 'Classic Double Bed',
        price: '100/par night',
        image: '../images/room5.jpg'
    },
    {
        id: 1,
        title: 'Classic Double Bed',
        price: '100/par night',
        image: '../images/room6.jpg'
    },
]

const Room = () => {
  return (
    <div className='bg-gray-50 my-20'>
        <h1 className='md:text-4xl text-2xl text-center p-3 pt-8 text-gray-900 font-semibold'>Our Rooms</h1>
        {/* <section>
            <h1>Our Rooms</h1>
            <h2>Our Rooms</h2>
            <main>
            {
                roomData.map((rooms, roomsValue) => {
                    <div key={roomsValue}>
                    <h1>{rooms.title}</h1>
                    <h2>{rooms.price}</h2>
                    <img src={rooms.imgage} alt="room-images" />
                    </div>
                })
            }
            </main>
            <p>Hello world</p>
        </section> */}
        <main className='rooms gap-10 m-10'>
            <div className='room_box hover:border border-gray-500 bg-white shadow-lg rounded-md'>
                <img className='roomImg w-[100%]' src={room1} alt="" />
                <div  className='p-2 text-gray-900'>
                    <h1 className='text-xl font-semibold'>Classic Double Bed</h1>
                    <h1>$150 / par <span className='text-gray-500'>night</span></h1>
                </div>
            </div>
            <div className='room_box hover:border border-gray-500 bg-white shadow-lg rounded-md'>
                <img className='roomImg w-[100%]' src={room2} alt="" />
                <div  className='p-2 text-gray-900'>
                    <h1 className='text-xl font-semibold'>Classic Double Bed</h1>
                    <h1>$150 / par <span className='text-gray-500'>night</span></h1>
                </div>
            </div>
            <div className='room_box hover:border border-gray-500 bg-white shadow-lg rounded-md'>
                <img className='roomImg w-[100%]' src={room3} alt="" />
                <div  className='p-2 text-gray-900'>
                    <h1 className='text-xl font-semibold'>Classic Double Bed</h1>
                    <h1>$150 / par <span className='text-gray-500'>night</span></h1>
                </div>
            </div>
            <div className='room_box hover:border border-gray-500 bg-white shadow-lg rounded-md'>
                <img className='roomImg w-[100%]' src={room4} alt="" />
                <div  className='p-2 text-gray-900'>
                    <h1 className='text-xl font-semibold'>Classic Double Bed</h1>
                    <h1>$150 / par <span className='text-gray-500'>night</span></h1>
                </div>
            </div>
            <div className='room_box hover:border border-gray-500 bg-white shadow-lg rounded-md'>
                <img className='roomImg w-[100%]' src={room5} alt="" />
                <div  className='p-2 text-gray-900'>
                    <h1 className='text-xl font-semibold'>Classic Double Bed</h1>
                    <h1>$150 / par <span className='text-gray-500'>night</span></h1>
                </div>
            </div>
            <div className='room_box hover:border border-gray-500 bg-white shadow-lg rounded-md'>
                <img className='roomImg w-[100%]' src={room6} alt="" />
                <div  className='p-2 text-gray-900'>
                    <h1 className='text-xl font-semibold'>Classic Double Bed</h1>
                    <h1>$150 / par <span className='text-gray-500'>night</span></h1>
                </div>
            </div>
        </main>
        <div className='text-center my-10'>
        <button className='border-none bg-yellow-700 p-3 rounded-2xl px-6 text-2xl text-white'><a href="/">View More</a><i className="fa-solid fa-angle-right translate-y-[21%]"></i></button>
        </div>
    </div>
  )
}

export default Room