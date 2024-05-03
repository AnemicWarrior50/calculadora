/* import logo from './logo.svg'; */
import { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [inputBorder, setInputBorder] = useState('border-primary')
  const [operacion, setOperacion] = useState('');
  const [operador, setOperador] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const [resultadoActivo, setResultadoActivo] = useState(false);

  useEffect( () => {
    if( operador === "=" ){
      if( resultadoActivo ){
        alert('Primero digita una nueva operacion');
      } else {
        try {
          const result = eval(operacion);
          setOperacion( result );
          setResultadoActivo( true );
          setInputBorder( 'border-danger' );
        } catch (error) {
          alert('Sintax Error!');
          setOperacion( '' );
        }
      }
    }else{
      if( resultadoActivo ){
        setResultadoActivo( false );
        setOperacion( operador );
        setInputBorder( 'border-primary' );
      }else{
        setOperacion( operacion + operador );
      }
    }
  }, [clickCount]);

  return (
    <div className="container text-center">
      <div className="row my-2">
        <div className="col-4">
          <input type='text' value={ operacion } readOnly className={'form-control ' + inputBorder + ' w-100 shadow-lg'}/>
        </div>
      </div>
      <div className="row my-2">
        <div className="col-1">
          <Button 
            operador='7'
            setOperador = { setOperador }
            clickCount = { clickCount }
            setClickCount = { setClickCount }
            buttonStyle='btn-secondary'
          />
        </div>
        <div className="col-1">
          <Button 
            operador='8'
            setOperador = { setOperador }
            clickCount = { clickCount }
            setClickCount = { setClickCount }
            buttonStyle='btn-secondary'
          />
        </div>
        <div className="col-1">
          <Button 
            operador='9'
            setOperador = { setOperador }
            clickCount = { clickCount }
            setClickCount = { setClickCount }
            buttonStyle='btn-secondary'
          />
        </div>
        <div className="col-1">
          <Button 
            operador='/'
            setOperador = { setOperador }
            clickCount = { clickCount }
            setClickCount = { setClickCount }
            buttonStyle='btn-success'
          />
        </div>
      </div>
      <div className="row my-2">
        <div className="col-1 offset-1">
          <Button 
            operador='4'
            setOperador = { setOperador }
            clickCount = { clickCount }
            setClickCount = { setClickCount }
            buttonStyle='btn-secondary'
          />
        </div>
        <div className="col-1">
          <Button 
            operador='5'
            setOperador = { setOperador }
            clickCount = { clickCount }
            setClickCount = { setClickCount }
            buttonStyle='btn-secondary'
          />
        </div>
        <div className="col-1">
          <Button 
            operador='6'
            setOperador = { setOperador }
            clickCount = { clickCount }
            setClickCount = { setClickCount }
            buttonStyle='btn-secondary'
          />
        </div>
        <div className="col-1">
          <Button 
            operador='*'
            setOperador = { setOperador }
            clickCount = { clickCount }
            setClickCount = { setClickCount }
            buttonStyle='btn-success'
          />
        </div>
      </div>
      <div className="row my-2">
        <div className="col-1">
          <Button 
            operador='1'
            setOperador = { setOperador }
            clickCount = { clickCount }
            setClickCount = { setClickCount }
            buttonStyle='btn-secondary'
          />
        </div>
        <div className="col-1">
          <Button 
            operador='2'
            setOperador = { setOperador }
            clickCount = { clickCount }
            setClickCount = { setClickCount }
            buttonStyle='btn-secondary'
          />
        </div>
        <div className="col-1">
          <Button 
            operador='3'
            setOperador = { setOperador }
            clickCount = { clickCount }
            setClickCount = { setClickCount }
            buttonStyle='btn-secondary'
          />
        </div>
        <div className="col-1">
          <Button 
            operador='-'
            setOperador = { setOperador }
            clickCount = { clickCount }
            setClickCount = { setClickCount }
            buttonStyle='btn-success'
          />
        </div>
      </div>
      <div className="row my-2">
        <div className="col-1">
          <Button 
            operador='.'
            setOperador = { setOperador }
            clickCount = { clickCount }
            setClickCount = { setClickCount }
            buttonStyle='btn-primary'
          />
        </div>
        <div className="col-1">
          <Button 
            operador='0'
            setOperador = { setOperador }
            clickCount = { clickCount }
            setClickCount = { setClickCount }
            buttonStyle='btn-secondary'
          />
        </div>
        <div className="col-1">
          <Button 
            operador='+'
            setOperador = { setOperador }
            clickCount = { clickCount }
            setClickCount = { setClickCount }
            buttonStyle='btn-success'
          />
        </div>
        <div className="col-1">
          <Button 
            operador='='
            setOperador = { setOperador }
            clickCount = { clickCount }
            setClickCount = { setClickCount }
            buttonStyle='btn-success'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
