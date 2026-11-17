import React from 'react'
import CarLogo from "../../assets/CarLogo.png";
import {GiHamburgerMenu} from "react-icons/gi";
import {FaSearch} from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeDown, fadeUp } from '../../animations/preset';

const NavMenu = [
    {
       id: 1,
       title: "Home",
       link: "#",
    },
    {
       id: 2,
       title: "Cars",
       link: "#",
    },
    {
       id: 3,
       title: "Bikes",
       link: "#",
    },
    {
       id: 4,
       title: "About Us",
       link: "#",
    },
];

const Navbar = () => {
  return (
    <motion.main 
      variants={fadeUp()}
      initial="initial"
      whileInView="animate"
      className='absolute top-0 left-0 w-full pt-6 md:pt-10 z-20 text-white'>
        <div className='container'>
            <div className="flex justify-between items-center">
                {/* Logo Section */}
                <div>
                    <img
                        className='w-[80px]' 
                        src={CarLogo} alt="" 
                    />
                </div>
                {/* Nav Menu Section */}
                <div className="hidden md:block">
                    <ul className='flex gap-4'>
                        {NavMenu.map((menu) => (
                            <li key={menu.id}>
                                <a href={menu.link} className='inline-block px-6 py-2 uppercase hover:bg-primary duration-200 rounded-md hover:shadow-[0px_0px_20px_8px_#FFD717]'>
                                    {menu.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Hamburger Menu Section */}
                <div className='flex md:hidden items-center gap-6'>
                    <div className='rounded-icons'>
                       <GiHamburgerMenu className='text-xl'/> 
                    </div>
                    <div className='rounded-icons'>
                       <FaSearch className='text-xl'/> 
                    </div>
                </div>
            </div>
        </div>
    </motion.main>
  )
}

export default Navbar