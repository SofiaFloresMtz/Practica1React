import React, {Component} from 'react';
import './App.css';
import Logo from './Componentes/Logo';
import Body from './Componentes/Body';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';

class App extends Component{
  render (){
    return(
      <div className="App">
          <Header
            titulo="Desarrollo de Aplicaciones para Dispositivos Móviles"
          />
          <Logo/>
          <Header
            fecha="24 de Octubre del 2020"
          />
          <Body
            tituloPractica="Práctica 1 - Unidad 2"
            arreglo={["Tipos de componentes",
                      "Contenedores",
                      "Usar más de un componente",
                      "Funciones",
                      "Props"]}
          />
          <Footer
            final="Copyright © Todos los derechos reservados"
          />
      </div>
    )};
}

export default App;
