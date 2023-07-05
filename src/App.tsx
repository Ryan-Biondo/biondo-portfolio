import Intro from './components/Intro';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <NavBar />
      <Intro />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
