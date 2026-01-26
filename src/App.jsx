import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./componentes/secciones/Home";
import Cursos from "./componentes/secciones/Cursos";
import About from "./componentes/secciones/About";
import Navbar from './componentes/Navbar.jsx';
import './index.css';


const App = () => {
  return (
  <div className='overflow-x-hidden'>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  <header className="hero" style={{backgroundImage: `linear-gradient(rgba(43, 244, 255, 0.46), rgb(208, 57, 246))`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white'
        }}>

    <div className="container text-center animate__animated animate__fadeInDown">
        <p className="text-uppercase small mb-1">¡Miles de Compañeros esperando estar contigo!</p>
        <h1 className="display-4 fw-bold">Adopta un Amigo</h1>
        <p className="lead">20% de descuento en articulos "Indispensables" para tu mascota</p>

        <div className="d-flex justify-content-center gap-4 mt-4">
          <a href="#" className="btn-banner btn-primary-custom text-decoration-none btn-animate-pulse">
            Perros
          </a>
          <a href="#" className="btn-banner btn-secondary-custom text-decoration-none btn-animate-pulse delay-pulse">
            Gatos
          </a>
        </div>
      </div>
  </header>
  </div>


  
  )
}

export default App