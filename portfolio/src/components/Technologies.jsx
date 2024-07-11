import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { IoLogoFirebase, IoLogoNodejs } from "react-icons/io5"
import { SiMongodb, SiTypescript, SiVuedotjs } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { DiRuby } from "react-icons/di";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}
        className="rounded-xl border-4 p-4">
          <RiReactjsLine 
        whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}
        className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}
        className="rounded-xl border-4 p-4">
          <IoLogoFirebase className="text-7xl text-orange-400"/>
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}
        className="rounded-xl border-4 p-4">
          <SiMongodb className="text-7xl text-green-600"/>
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}
        className="rounded-xl border-4 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-600"/>
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}
        className="rounded-xl border-4 p-4">
          <SiTypescript className="text-7xl text-sky-600"/>
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}
        className="rounded-xl border-4 p-4">
          <SiVuedotjs className="text-7xl text-green-700"/>
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}
        className="rounded-xl border-4 p-4">
          <IoLogoNodejs className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}
        className="rounded-xl border-4 p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}
        className="rounded-xl border-4 p-4">
          <DiRuby className="text-7xl text-red-600"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
