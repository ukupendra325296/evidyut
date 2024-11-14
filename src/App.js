import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Career from './components/Career';
import Enquire from './components/Enquire';
import Contact from './components/Contact';
import Footer from './components/Footer';






function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar />
    <Routes> 
      <Route path='' element={<Home />}></Route>
      <Route path='/Enquire' element={<Enquire />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/career' element={<Career />}></Route>
      <Route path='/Contact' element={<Contact />}></Route>
      
      
    </Routes>
    
    <Footer/>
    </BrowserRouter>
   </div>
  );
}

export default App;
