import About from "./components/About";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import WorkExperience from "./components/WorkExperience";

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="fixed bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#C5DDFF,transparent)]"></div></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <HeroSection />
        <About />
        <Technologies />
        <WorkExperience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
