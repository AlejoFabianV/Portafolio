import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import Inicio from './pages/Inicio';
import SobreMi from './pages/SobreMi';
import Proyectos from './pages/Proyectos';

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
