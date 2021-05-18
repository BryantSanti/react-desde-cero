import React from 'react';
//import React, {Fragment} from 'react';
import './App.css';
//import "./styles/styles.scss"
import Curso from "./Curso"

const cursos = [
  {
    "titulo": "React desde cero",
    "image": "https://4.bp.blogspot.com/-_YSVTe2ekBU/XKMntJDH0ZI/AAAAAAAAXNk/3d48i_XShWwvoMNj0YJWp2J4_Woh9dzGgCLcBGAs/s1600/reactjs%2Btutorial.png",
    "price": 30,
    "profesor": "Bryant Santiago"
  }, 
  {
    "titulo": "HTML desde cero",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png",
    "price": 20,
    "profesor": "Eder"
  }, 
  {
    "titulo": "CSS desde cero",
    "image": "https://rolandocaldas.com/wp-content/uploads/2013/05/css3.png",
    "price": 10,
    "profesor": "Daniela"
  }, 
  {
    "titulo": "Java desde cero",
    "image": "http://www.manualweb.net/img/logos/java.png",
    "price": 50,
    "profesor": "Egdar"
  }
]

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
        {
          cursos.map( c => <Curso title={c.titulo} image={c.image} price={c.price} profesor={c.profesor}/>)
        }
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