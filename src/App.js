import './App.css';
import NavBar from './components/NavBar';
import About from './screens/About';
import Contact from './screens/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
