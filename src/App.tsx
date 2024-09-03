import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComparativoVendas from './pages/comparativoVendas';
import './App.css'
import Menu from './components/menu/Menu';
import Cabecalho from './components/cabecalho/Cabecalho';

const App: React.FC =  () =>  {
  return (
    <>
        <Router>
          <div className="app">
            <AuthenticatedLayout />
          </div>
        </Router>
    </>
  );
};

const AuthenticatedLayout = () => {

  return (
    <>
      {<Menu />}
      <div className="app-main">
        {<Cabecalho />}
        <Routes>
          <Route path="/" element={<ComparativoVendas />} />
        </Routes>
      </div>
    </>
  );
};


export default App
