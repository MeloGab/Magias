import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Lista from './Pages/Lista/Lista';
import Detalhes from './Pages//Detalhes/Detalhes';
import Cadastro from './Pages/Cadastro/Cadastro';
import Editar from './Pages/Editar/Editar';
import Login from './Pages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <Login /> } />
        <Route exact path='/lista' element={ <Lista /> } />
        <Route exact path='/detalhes' element={ <Detalhes /> } />
        <Route exact path='/cadastro' element={ <Cadastro /> } />
        <Route exact path='/editar' element={ <Editar /> } />
      </Routes>
    </Router>
  );
}

export default App;
