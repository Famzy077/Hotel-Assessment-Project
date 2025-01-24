// import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="arrow-top text-end relative my-10 mx-2">
<a href="#top" className="text-3xl text-gray-900 font-bold items-center p-5 bg-gray-100 shadow-xl h-[50px] w-[50px] rounded-full"><i className="fa-solid fa-arrow-up"></i></a>
</div>

    <footer className='gap-4 bg-gray-900 text-white p-10'>
        <main className='footer grid p-10 bg-gray-900 text-white leading-10 text-xl'>
            <div className="footer-content">
                <h1 className='m-4 font-bold text-2xl'>Marian</h1>
                <div>
                <p>123 Anywhere St., Any City 12345</p>
                <p>123-456-7890</p>
                <p>marianhotel@gmail.com</p>
                </div>
            </div>
            <div>
                <p><Link to={'/'}>About Us</Link></p>
                <p><Link to={'/'}>Departments</Link></p>
                <p><Link to={'/'}>Agents</Link></p>
                <p><Link to={'/'}>Testimonials</Link></p>
            </div>
            <div>
                <p><Link to={'/'}>Blog</Link></p>
                <p><Link to={'/'}>Contact Us</Link></p>
                <p><Link to={'/'}>FAQs</Link></p>
                <p><Link to={'/'}>Privacy Policy</Link></p>
                <p><Link to={'/'}>Terms and Conditions</Link></p>
            </div>
            <div>
                <h2>Be Our Subscribers</h2>
                <p>To get the latest news about the hotel</p>
                <form className='shadow-none' onSubmit={handleSubmit} action="">
                <input required className='w-auto p-1 text-black' type="email" placeholder='Subscribe'/> <br />
                <button className='border-1 rounded-lg bg-yellow-800 text-white px-9 shadow-xl'>Submit</button>
                </form>
            </div>
        </main>
        <article className='footerArticle md:flex flex-wrap justify-around'>
            <div className='md:flex flex gap-4'>
                <p>Follow Us</p>
                <div><i className="fa-brands fa-square-facebook"></i></div>
                <div><i className="fa-brands fa-youtube"></i></div>
                <div><i className="fa-brands fa-linkedin"></i></div>
                <div><i className="fa-brands fa-instagram"></i></div>
                <div><i className="fa-brands fa-linkedin"></i></div>
            </div>
            <div>
                <p>Copyright © {dateTime } Marian Hotel developed by <b>Femi</b>. All rights reserved.</p>
            </div>
        </article>
    </footer>
</div>



  )
}
    const handleSubmit = (index) => {
    index.preventDefault()
    index.target.reset()
    alert('Thanks for subscribed')
    }
    
  const dateTime = new Date().getFullYear();
export default Footer
