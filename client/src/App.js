import './App.css';
import React from 'react';
import{ BrowserRouter, Routes, Route} from 'react-router-dom';
//importo componentes

import Home from './components/Home/home';
import Landing from './components/Landing/landing';
import CreateActivity from './components/CraeteActivity/CreateActivity';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element= {<Landing />} />
        <Route path='/home' element= {<Home />} />
        <Route path='/home/:id' element= {<CountryDetail />} />
        <Route path='/activities' element= {<CreateActivity />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
