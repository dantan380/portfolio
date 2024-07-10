import logo from "../assets/dt-high-resolution-logo-black-transparent.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <img src={logo} alt="logo" height="35" width="35"></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
      </div>
    </nav>
  )
}

export default Navbar
