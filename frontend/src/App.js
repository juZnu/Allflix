import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';

function App() {
  const [activation,setActivation] = useState(false)
  const onClickHandler = () =>{
    setActivation(!activation);
  }
  return (
    <div>
      <div>
        <button disabled= {activation} onClick={() =>onClickHandler(activation)}>Login</button>
        <button disabled = {!activation} onClick={() => onClickHandler(!activation)}>Signup</button>
      </div>
      <div>
        {activation ? <Login /> : <Signup />}
      </div>
    </div>
  );
}

export default App;
