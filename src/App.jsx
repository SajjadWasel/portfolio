import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import CustomNavbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'


function App() {



  return (
    <div className='page-container'>

      <CustomNavbar></CustomNavbar>

      <section id="home">
        <Home></Home>
      </section>


      <section id="about">
        <About></About>
      </section>

      <section id="skills">
        <Skills></Skills>
      </section>

      <section id="projects">
        <Projects></Projects>
      </section>

      <section id="contact">
        <Contact></Contact>
      </section>



    </div>
  )
}

export default App
