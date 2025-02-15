import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
     className="my-20 text-center text-4xl">
      Projects
      </motion.h2>
     <div>
      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full lg:w-1/4">
            <img 
            src={project.image} 
            alt={project.title} 
            width={150} 
            height={150} 
            className="mb-6 rounded"></img>
          </motion.div>
          <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-xl lg:w-3/4">
            <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mb-5 font-semibold text-base">
              {project.title}
            </a>
            <p className="mb-4">{project.description}</p>
            {project.technologies.map((tech, index) => (
              <span key={index} 
              className="mr-2 rounded bg-neutral-200 text-blue-800 px-2 py-1 text-sm font-medium">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      ))}
     </div>
    </div>
  )
}

export default Projects
