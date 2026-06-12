import './App.css';
import "./css/bootstrap.min.css";
import "./css/custom.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Engage from './Pages/Services/Engage';
import Pontificate from './Pages/Services/Pontificate';
import Synergize from './Pages/Services/Synergize';
import SinglePost from './Pages/SinglePost';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/engage' element={<Engage />} />
          <Route path='/services/pontificate' element={<Pontificate />} />
          <Route path='/services/synergize' element={<Synergize />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/SinglePost/:id' element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
