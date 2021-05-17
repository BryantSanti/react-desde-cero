import React from 'react';
import Curso from './Curso.jsx'
//import React, {Fragment} from 'react';
import './App.css';
//import "./styles/styles.scss";

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="banner" src="https://wallpapercave.com/wp/wp2001242.jpg"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Cursos de EDTeam</p>
        <p> Tu futuro te esta esperando</p>
        <a href="https://ed.team" className="button">Suscribirse</a>
      </div>
    </div>
  </div>
</div>

  <div className="ed-grid m-grid-3">
        <Curso />
        <Curso />
        <Curso />
  </div>
  </>
)

export default App;

/*const App = () => (
  //<Fragment>
  <>
    <div className="saludo">
    <h1>Hola Mundo</h1>
    <p>Hola, saludando desde mi componente</p>
    </div>
    <div>
    <img src="https://www.plasticwebs.com/plastic/stock/Post/7-image/7-image_web.jpg"/>
    </div>
  </>
  //</Fragment>
)

export default App;
*/


/*
  REGLAS JSX
  1. Toda etiqueta debe cerrarse.
  2. Los componentes deben devolver un solo elemento padre.
  3. Apoyarse de los Fragment cuando necesito devolver 2 elementos.
  4. Fragment => <></>
  5. img siempre se cierra.
  6. class => clasName
  7. for => htmlFor
*/