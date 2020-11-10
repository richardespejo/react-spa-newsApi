import React , { Fragment, useState , useEffect} from 'react';
import Header from './components/header.js';
import Formulario from './components/formularios.js';
import ListadoNoticias from './components/listadoNoticias.js';

function App() {


  //const apiKey = dd273921109843429373da1814a42a93;
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect( ()=>{
    const consultarApi = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=dd273921109843429373da1814a42a93`;
        const respuesta = await fetch(url);
        const noticias = await respuesta.json();
        guardarNoticias(noticias.articles);
    
    }
    consultarApi();
  },[categoria]);

  return (
    <Fragment>
      <Header titulo="RESPEJO NEWS"></Header>
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria}></Formulario>
        <ListadoNoticias noticias={noticias}></ListadoNoticias>
      </div>
    </Fragment>
  );
}

export default App;
