export const fade_custom = ({x =100, y =100, delay =1, scale =1, opacity= 1,} = {}) => ({
    initial: {
        opacity: opacity,
        y: y,
        x: x,
        scale: scale,
    },

    animate: {
        scale: scale,
        opacity: opacity,
        y: 0,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            delay: delay,
            ease: "easeInOut",
        },
    },
});


export const scaleOut = ({x =0, y =0, delay =1, scale =0, opacity= 1, duration=1} = {}) => ({
    initial: {
        opacity: opacity,
        y: y,
        x: x,
        scale: scale,
    },

    animate: {
        scale: 1,
        opacity: opacity,
        y: 0,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            delay: delay,
            ease: "easeInOut",
            duration:duration,
        },
    },
});

export const fadeDown = ({y = 100, delay = 1, scale =1, duration=1} = {}) => ({
    initial: {
        opacity: 0,
        y: y,
        scale: scale,
    },

    animate: {
        scale: scale,
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            delay: delay,
            duration:duration,
            ease: "easeInOut",
        },
    },
});

export const fadeUp = ({y = -100, delay = 1, scale = 1, duration=1} = {}) => ({
    initial: {
        opacity: 0,
        y: y,
        scale: scale,
    },

    animate: {
        scale: scale,
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            delay: delay,
            ease: "easeInOut",
            duration:duration
        },
    },
});


export const fade2Right = ({x = -100, delay = 1, scale = 1} = {}) => ({
    initial: {
        opacity: 0,
        y: 0,
        x: x,
        scale: scale,
    },

    animate: {
        scale: 1.5,
        opacity: 1,
        x:0,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            delay: delay,
            ease: "easeInOut",
        },
    },
});


export const fade2Left = ({x = 100, delay = 1, scale = 1} = {}) => ({
    initial: {
        opacity: 0,
        y: 0,
        x: x,
        scale: scale,
    },

    animate: {
        scale: scale,
        opacity: 1,
        x:0,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            delay: delay,
            ease: "easeInOut",
        },
    },
});


export const containerVariants = ({ delay = 0} = {}) => ({
    initial: {
        opacity: 1,
    },

    animate: {
        opacity: 1,
        transition: {
            delay: delay,           
            staggerChildren: 0.4,
        },
    },
});

export const fadeIn = ({ scale = 1, duration=1, delay=1} = {}) => ({
    initial: {
        opacity: 0,
        y: 0,
        scale: scale,
    },

    animate: {
        scale: scale,
        opacity: 1,
        x:0,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay:delay,
            duration:duration,
        },
    },
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                  {/*SlideShow Animation Preset*/}
export const heroFramePreset = ({} = {}) => ({
  initial: {opacity: 0,scale: 1.08,},

  exit: {
    opacity: 0,
    scale: 1.02,
  },

  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity:{
        duration:1.2,
        ease: "easeInOut",
      },
      scale: {
        duration:5,
        ease: "linear"
      },
    }
  },
});


export const heroSlide = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};



// Call the preset
{/* <motion.div
    variants={fadeUp(100, 1)}
    initial="hidden"
    animate="visible"
>
    Hello
</motion.div> */}

// fadeDown({
//     distance: 100,
//     delay: 0.3
// })



//     const heroSlides = [
//     "/images/telecommunications.jpg",
//     "/images/bts-tower.jpg",
//     "/images/greenfield-tower.jpg",
//   ];
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   <AnimatePresence mode="sync">
//     <motion.div
//       key={current}
//       variants={heroFramePreset()} 
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className="absolute inset-0"
//     >
//       <Image
//         src={heroSlides[current]}
//         alt=""
//         fill
//         priority
//         loading="eager"
//         sizes="100vw"
//         aria-hidden="true"
//         className="object-cover"
//       />
//     </motion.div>
// </AnimatePresence>