import React from 'react'
import Navbar from '../navbar/Navbar';
import Car from "../../assets/Car.png"
import CarLogo from "../../assets/CarLogo.png"
import epitome from "../../assets/epitome.png"
import BG from "../../assets/bg.jpg";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react"
import { fade2Left, fade2Right, fadeDown, fadeIn, fadeUp, scaleOut } from '../../animations/preset';


const bgImage = {
    backgroundImage: `url(${BG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const Hero = () => {

  return (
    <main style={bgImage}>
        <div className="bg-gradient-to-r from-primary to bg-primaryDark/90">
            <div className="container text-white">
                {/* Navbar Components */}
                <Navbar />

                {/* Hero Components */}
                <section className='grid grid-cols-1 md:grid-cols-2 place-items-center min-h-screen py-32 md:py-20'>
                    {/* text content section */}
                    <div className='text-center md:text-left space-y-8'>
                        <motion.h1 
                        variants={fadeUp({duration:0.4})}
                        initial="initial"
                        whileInView="animate"
                        className='text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight'> 
                            Lamborghini
                            <br /> {' '}
                            <span className='text-transparent text-outline'> Sports EV </span>
                        </motion.h1>
                        <motion.button
                            variants={fadeUp({delay:1.2})} 
                            initial="inital"
                            whileInView="animate"
                            className='outline-btn flex justify-center items-center gap-4 group'>
                            Explore
                            <FaArrowRight 
                                className='group-hover: translate-x-2 transition'
                            />
                        </motion.button>
                        {/* Features Section Here */}
                        <motion.div 
                            variants={fadeDown({delay:1.2, duration:0.4})}
                            initial="initial"
                            whileInView="animate"
                            className= 'bg-black/40 p-6 space-y-2 lg:max-w-[350px] !mt-[60px]'>
                            <h1 className='text-xl uppercase'>Vehicle Features</h1>
                            <p className='text-xs leading-loose'>
                                The car feature rear-hinged suicide doors.
                                Yuki Terai is credited with the exterior design.
                                The interior fits four adults, with the front passengers
                                seated on a single bench seat. The dashboard is decorated
                                in wood trim with  a long digital screen as the instrument
                                and informant panel.
                            </p>
                        </motion.div>
                    </div>
                    {/* image section here */}
                    <div className='relative'>
                        <motion.img
                            variants={fade2Right({x:-200, scale:0.5})}
                            initial="initial"
                            whileInView="animate"
                            src={Car} alt="" 
                            className="w-[80%] sm:w-[70%] md:w-full relative z-30 mx-auto drop-shadow-[0_20px_25px_rgba(0,0,0,0.7)]" 
                        />
                    {/* Glowing Circle */}
                    <motion.div
                        variants={scaleOut({scale:0.5, duration:0.4, delay:0.8})}
                        initial="inital"
                        whileInView="animate"

                        className='border-[15px] border-white-200 rounded-full
                         h-[120px] w-[120px] md:h-[220px] md:w-[220px] 
                         absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         glowing-shadow'
                    >
                    </motion.div>
                    {/* Bg Text Here */}
                    <motion.div
                        variants={fadeIn({delay:1.4, duration:0.4})}
                        initial="initial"
                        whileInView="animate" 
                        className="absolute -top-40 md:-top-40 left-0 z-[1]">
                        <h1 className='text-[80px] sm:text-[120px] md:text-[180px] font-bold text-blue-200/10 leading-none'>
                            {" "}
                            Sport
                        </h1>

                    </motion.div>

                    </div>
                </section>
            </div>
        </div>
    </main>
  )
}

export default Hero