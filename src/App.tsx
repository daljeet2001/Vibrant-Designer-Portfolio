import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Case from './pages/Case';
import ScrollToTop from './components/ScrollToTop';

function App() {


  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/case-study/ghosted-memory" element={<Case/>}/>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
