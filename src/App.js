import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>

            <Route path='/' element={<Home/>}></Route>

            <Route path='/about' element={<About/>}></Route>

            <Route path='/contact' element={<Contact/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
