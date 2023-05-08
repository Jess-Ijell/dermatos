import React from 'react'

import { Navbar, Bloque } from './componentes';
import { Camara, Form, Header, Historial, Info } from './contenedores';
import './app.css';

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Bloque />
        <Camara />
        <Form />
        <Historial />
        <Info />
    </div>
  )
}

export default App