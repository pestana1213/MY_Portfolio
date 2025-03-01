import Hero from "./Components/Hero";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import About from "./Components/About";
import ContactMe from "./Components/ContactMe";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-400 to-black text-white dark:from-gray-900 dark:to-gray-800">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <ContactMe />
    </div>
  );
}
