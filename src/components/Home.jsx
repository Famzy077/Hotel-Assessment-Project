import { Carousel, Typography} from "@material-tailwind/react";
import { useState, useEffect } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import img from '../images/logo.png';
import landingImage from '../images/h1_hero.jpg';   
import landingImage3 from '../images/landingImage3.png'
import landingImage2 from '../images/landingImage2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import style from '../components/general.module.css';
import About from "./About";
import Room from "./Room";
import Footer from "./Footer";
import Dining from "./Dining";
import { Reviews } from "./Review";
import Blog from "./Blog";
const Index= () => {

    const [scroll, setScroll] = useState(0);
    const [isOpen, setIsOpen] = useState(false)
    // const [date, setDate] = useState("03-24-2025")

    const handleNav= () => {
      setIsOpen(!isOpen);
    }
    const handleScroll = () => {
      const position = window.scrollY;
      setScroll(position);
    }
    useEffect(() => {
      console.log("Nav state changed:", isOpen ? "Open" : "Closed");
    }, [isOpen])
    useEffect(() => {
      if (scroll > 100) {
        document.querySelector('.header')?.classList.add('bg-white');
        document.querySelector('.header')?.classList.add('shadow-xl');
        document.querySelector('.header')?.classList.add('opacity-90');
      } else {
        document.querySelector('.header')?.classList.remove('bg-white');
        document.querySelector('.header')?.classList.add('shadow-xl');
        document.querySelector('.header')?.classList.add('opacity-90');
      }
      window.addEventListener('scroll', handleScroll);

      return () => {
       window.removeEventListener('scroll', handleScroll);
      }
    }, [scroll]);
  return (
    <div>
      <header className='header flex justify-between py-8 text-black h-[3rem] place-items-center w-[100%] bg-gray-100'>
            <div className="logo text-center w-[100%] flex justify-between">
              <Link className='logoImg' href="#"><img src={img} width={130} height={130} alt='logoIcon'/></Link>
              <div onClick={handleNav} className={`nav-icon text-3xl cursor-pointer ${style.toggleColor} ${isOpen ? style.open : ''}`}>{isOpen ? `✖`: '☰'}</div>
            </div>
            <nav className='nav w-[100%] text-black'>
              <ul className='flex justify-start gap-2 text-xl'>
                <li><Link href='/blog/blog'>Home</Link></li>
                <li><Link href='/'>Blog</Link></li>
                <li><Link href='/'>Shop</Link></li>
                <li><Link href='/blog/blog'>Contact</Link></li>
                <li><Link href='/blog/blog'>FAQs</Link></li>
              </ul>
            </nav>

            <div className="w-[100%] text-center">
              <button className="bg-yellow-700 p-2 rounded-md text-white">Get Started</button>
            </div>

            <div className={`miniSreen w-[100%] absolute bg-black top-16 p-10 left-0 h-[50vh] ${isOpen ? 'open' : ''}`}>
              <div><Link href='/blog/blog' className='font-semibold text-2xl text_nav'>Home </Link><FontAwesomeIcon className='ml-7 cursor-pointer arror_icon font-semibold text-2xl'  icon={faArrowRight} /></div>
              <div><Link href='/blog/blog' className='font-semibold text-2xl mr-8 text-gray-400 text_nav'>Blog </Link><FontAwesomeIcon className='ml-7 cursor-pointer font-semibold text-2xl arror_icon text-gray-400' icon={faArrowRight} /></div>
              <div><Link href='/blog/blog' className='font-semibold text-2xl mr-8 text-gray-400 text_nav'>Shop </Link><FontAwesomeIcon className='ml-7 font-semibold text-2xl cursor-pointer arror_icon text-gray-400'  icon={faArrowRight} /></div>
              <div><Link href='/blog/blog' className='font-semibold text-2xl mr-8 text-gray-400 text_nav'>COntact </Link><FontAwesomeIcon className='ml-7 font-semibold text-2xl cursor-pointer arror_icon text-gray-400'  icon={faArrowRight} /></div>
              <div><Link href='/blog/blog' className='font-semibold text-2xl mr-8 text-gray-400 text_nav'>FAQs </Link><FontAwesomeIcon className='ml-7 font-semibold text-2xl cursor-pointer arror_icon text-gray-400'  icon={faArrowRight} /></div>
              <div>
                <button className='bg-blue-gray-400 text-gray-400'>Get Started</button>
              </div>
            </div>
        </header>
          <section>
            <Carousel className="">
              <div className="relative h-full w-full">
                <img
                  src={landingImage}
                  alt="image 1"
                  className="h-[93vh] w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl font-semibold uppercase"
                    >
                      Top Hotel in the City
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80"
                    >
                      Hotel & Resort
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <img
                  src={landingImage3}
                  alt="image 2"
                  className="h-[93vh] w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                  <div className="pl-12 md:pl-20 lg:pl-32">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl text-center font-semibold"
                    >
                      Latest Hotel in the world
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80 text-center"
                    >
                      Hotel & Resort
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <img
                  src={landingImage2}
                  alt="image 3"
                  className="h-[93vh] w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                  <div className="pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      Enjoy The Beauty of Nature during your vacation
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80"
                    >
                        Hotel & Resort
                    </Typography>
                  </div>
                </div>
              </div>
            </Carousel>
      </section>
      <form action="" className="form flex gap-4 shadow-lg rounded-md justify-around items-center p-10 mx-10 translate-y-[-40%] mt-0 bg-white mb-20">
        <div className=" flex flex-col gap-4 h-[6rem]">
          <label htmlFor="check" className="font-semibold text-gray-900">Check In Date:</label>
          <input type="date" value/> <br />
        </div>
        <div className=" flex flex-col gap-4 h-[6rem]">
          <label htmlFor="check">Check Out Date:</label>
          <input type="date" value className=""/> <br />
        </div>
        <div className=" flex flex-col gap-4 h-[6rem]">
          <label htmlFor="Adult">Adults:</label>
          <select name="_" id="_" className="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className=" flex flex-col gap-4 h-[6rem]">
          <label htmlFor="child">Childreen:</label>
          <select name="_" id="_" className="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className=" flex flex-col gap-4 h-[6rem]">
          <label htmlFor="child">Rooms:</label>
          <select name="_" id="_" className="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="btn">
          <button className="text-white  rounded-md p-3 px-6" type="submit" value='Book Now'>Book Now</button>
        </div>
      </form>

      <section>
        <About/>
      </section>

      <div className="bg-gray-100">
        <main>
          <Room/>
        </main>

        <div>
          <Dining/>
        </div>
      </div>

      <div>
          <h1 className="text-4xl translate-y-36 text-center">Reviews</h1>
          <Reviews/>
      </div>

      <div>
      <h1 className="text-center text-4xl mb-4 font-semibold">Blogs</h1>
        <Blog></Blog>
      </div>

      <div className="flex my-16 gap-4 justify-center">
        <img src="https://themewagon.github.io/marian/assets/img/rooms/room5.jpg" alt="images" />
        <img src="https://themewagon.github.io/marian/assets/img/our_blog/blog-img2.jpg" alt="images" />
        <img src="https://themewagon.github.io/marian/assets/img/our_blog/blog-img3.jpg" alt="images" />
      </div>

      <Footer/>
    </div>

  );
}
export default Index;
// https://themewagon.github.io/marian/