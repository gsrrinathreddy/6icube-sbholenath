import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Blog from './Pages/Blog/indes';
import Contact from './Pages/Contact';
import Events from './Pages/Events';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
<>

<BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Events" element={<Events/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>

</>
  );
}

export default App;
