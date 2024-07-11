import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Work Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            >
            <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full lg:w-1/4">
              <p className="mb-2 text-sm">{experience.year}</p>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "} <span className="text-sm text-blue-400">
                  <a 
                  href={experience.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  >{experience.company}
                  </a>
                </span>
              </h6>
              <p className="mb-4">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span 
                key={index} 
                className="bg-neutral-200 mr-2 mt-4 rounded px-2 py-1 text-sm font-medium text-blue-800">
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default WorkExperience
