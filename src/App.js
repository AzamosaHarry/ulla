import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Sustainability from './pages/sustainability/Sustainability';
import Glance from './pages/about/Glance';
import Purpose from './pages/about/Purpose';
import Operations from './pages/operations/Operations';
import Strategy from './pages/strategy/Strategy';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/csr' element={<Sustainability />} />
          <Route path='/operations' element={<Operations />} />
          <Route path='/about/glance' element={<Glance />} />
          <Route path='/about/purpose' element={<Purpose />} />
          <Route path='/about/strategy' element={<Strategy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
