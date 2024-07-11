import { HERO_CONTENT } from "../constants"
import { motion } from "framer-motion"
import profilePic from "../assets/dt-hero-image.jpg"

const containerAnimation = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const HeroSection = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1  
            initial="hidden"
            animate="visible"
            variants={containerAnimation(1)}
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Daniel Tan
            </motion.h1>
            <motion.span 
            initial="hidden"
            animate="visible"
            variants={containerAnimation(1.25)}
            className="bg-gradient-to-r from-blue-300 via-slate-500 to-blue-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p 
            initial="hidden"
            animate="visible"
            variants={containerAnimation(1.5)}
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x:0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="rounded-xl" src={profilePic} alt="profilePic" width="450" height="450"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
