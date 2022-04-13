
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [opcion, setOpcion] = useState('hoteles');
  const [data, setData] = useState([]);

  const url = "https://pruebagcd.herokuapp.com/";

  useEffect(() => {
    const api = async () => {
      const response = await fetch(url + opcion);
      const json = await response.json();
      setData(json);
    }
    api();

  }, [opcion])//el useEffect se ejecuta cuando se cambia opcion;

  const cambiarOpcion = () => {
    if (opcion === 'hoteles') {
      setOpcion('paquetes')
    } else if (opcion === 'paquetes') {
      setOpcion('ofertas');
    } else {
      setOpcion('hoteles');
    }
  }


  return (
    <div className="container">
      <div className='row'>
        <div className='col-6'>
          <button className="btn btn-danger"
            onClick={cambiarOpcion}>Cambiar Opcion</button>
        </div>
        <div className='col-6'>
          <ul type="none">
            {data.map((o, i) => { return <li key={i + o.nombre}>{o.nombre}</li> })}
          </ul>
        </div>

      </div>

    </div>
  );
}

export default App;
