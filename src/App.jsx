import'./App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Services from './components/Services.jsx'
import Experience from './components/Experience';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Services></Services>
       <Projects></Projects>
         <Experience ></Experience>
         <Certificate></Certificate>
         <Contact></Contact>
         <Footer></Footer>
    </>
  )
}
export default App