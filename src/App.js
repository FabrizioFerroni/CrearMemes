import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';
import {toast} from 'react-toastify'

function App() {
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState();

  const onChangeLinea1 = (e) =>{    
    setLinea1(e.target.value)
  }

  const onChangeLinea2 = (e) =>{    
    setLinea2(e.target.value)
  }

  const onChangeImagen = (e) =>{
    setImagen(e.target.value)
  }

  const onClickExportar  = (e) => {
    // toast.success('El meme se exporto con exito',{
    //   position: 'top-right',
    //   autoClose: '5000',
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });

    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png'
      link.href = img;
      link.click();    
      
    });
    // alert("El meme se exporto con exito")
    toast.success('El meme se exporto con exito',{
        position: 'top-right',
        autoClose: '5000',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }

  return (
    <div className="App">
      {/* Select picker de memes */}
      <select onChange={onChangeImagen}>
        <option hidden>Seleccione un valor</option>
        <option value="fire">Casa en Llamas</option>
        <option value="futurama"> Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br />
      {/* Input text - Primer linea */}
      <input type="text" onChange={onChangeLinea1} placeholder="Ingrese un texto"/>
      <br />
      {/* Input text - Segunda linea */}
      <input type="text" onChange={onChangeLinea2} placeholder="Ingrese otro texto" />
      <br />
      <button onClick={onClickExportar}>Exportar</button>
      <div className="meme" id="meme" >
        <span className="linea1">{linea1}</span> <br />
        <span className="linea2">{linea2}</span><br />
        <img src={"/img/"+imagen+".jpg"} hidden={!imagen} />
      </div>
    </div>
  );
}

export default App;
