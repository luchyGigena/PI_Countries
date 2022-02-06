import './App.css';
import React from 'react';
import{ BrowserRouter, Routes, Route} from 'react-router-dom';
//importo componentes

import Home from './components/Home/home';
import Landing from './components/Landing/landing';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element= {<Landing />} />
        <Route path='/home' element= {<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
