import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

import Nav from './components/layout/Nav.js';
import Footer from './components/layout/Footer.js';

import Inicio from './pages/Inicio.js'
import SobreMi from './pages/SobreMi.js';
import Proyectos from './pages/Proyectos.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/SobreMi' element={<SobreMi />} />
          <Route path='/Proyectos' element={<Proyectos />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
