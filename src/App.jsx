import './App.css'
import Navbar from './componentes/section/Navbar'
import Presentation from './componentes/section/Presentation'
import Projects from './componentes/section/Projects'
import Timeline from './componentes/section/Timeline'
import Footer from './componentes/section/Footer'

function App() {

  return ( 
    <>
      <div>
        <Navbar/>
        <Presentation/>
        <Projects/>
        <Timeline/>
        <Footer/>  
      </div>

    </>
  )
}

export default App
