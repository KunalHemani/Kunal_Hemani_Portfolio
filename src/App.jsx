import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AcademicAchievements from './components/AcademicAchievements';
import Tabs from './components/Tabs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative selection:bg-cyan-500/30">
      {/* Dynamic Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] right-[-5%] w-[400px] w-[400px] bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <AcademicAchievements />
        <Tabs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;