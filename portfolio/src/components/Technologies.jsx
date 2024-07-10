import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { IoLogoFirebase, IoLogoNodejs } from "react-icons/io5"
import { SiMongodb, SiTypescript, SiVuedotjs } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { DiRuby } from "react-icons/di";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-xl border-4 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-xl border-4 p-4">
          <IoLogoFirebase className="text-7xl text-orange-400"/>
        </div>
        <div className="rounded-xl border-4 p-4">
          <SiMongodb className="text-7xl text-green-600"/>
        </div>
        <div className="rounded-xl border-4 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-600"/>
        </div>
        <div className="rounded-xl border-4 p-4">
          <SiTypescript className="text-7xl text-sky-600"/>
        </div>
        <div className="rounded-xl border-4 p-4">
          <SiVuedotjs className="text-7xl text-green-700"/>
        </div>
        <div className="rounded-xl border-4 p-4">
          <IoLogoNodejs className="text-7xl text-green-500"/>
        </div>
        <div className="rounded-xl border-4 p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-xl border-4 p-4">
          <DiRuby className="text-7xl text-red-600"/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
