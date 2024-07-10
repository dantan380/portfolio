import { EXPERIENCES } from "../constants";

const WorkExperience = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Work Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "} <span className="text-sm text-blue-400">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span key={index} className="bg-neutral-200 mr-2 mt-4 rounded px-2 py-1 text-sm font-medium text-blue-800">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkExperience
