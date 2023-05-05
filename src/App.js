import React from 'react'

import { Navbar, Bloque } from './componentes';
import { Camara, Form, Header, Historial, Info } from './contenedores';

const App = () => {
  return (
    <div className="App">
        <div>
          <Navbar />
          <Header />
        </div>
        <div>
          <Bloque />
          <Camara />
          <Form />
          <Historial />
          <Info />
        </div>
    </div>
  )
}

export default App