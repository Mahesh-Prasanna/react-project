import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function buttonClick(){
  console.log('Button is clicked');
  alert('clicked');
}

function App() {

  const [count, setCount] = useState(0);

  // let count = 0;

  const increment = () =>{
    // count +=1;
    setCount(count+1);
  };
  const decrement = () =>{
    // count -=1;
    setCount(count-1);
  };



  return (
    

    <>
      
      <span className='title'>My Counter Application</span>
      <h4 className='subTitle'>The Counnt is : {count}</h4>
      <div className='actionButton'>
        <button className='increaseButton' onClick={increment}>Increase</button>
        <button className='decreaseButton' onClick={decrement}>Decrease</button>
      </div>

      <Button onClick={buttonClick} variant="primary">Primary</Button>

    </>


    // <Router>
    //   <Routes>

    //         <Route path='/' element={<Home/>}></Route>

    //         <Route path='/about' element={<About/>}></Route>

    //         <Route path='/contact' element={<Contact/>}></Route>

    //   </Routes>
    // </Router>
  );
}

export default App;
