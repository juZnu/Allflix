
import './App.css';
import Landing from './Components/Landing';
import { Myprovider } from './Context/Myprovider';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <Myprovider >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/Login' element={<Landing active={false}/>}/>
          <Route path='/signup' element={<Landing active={true}/>}/>
        </Routes>
      </BrowserRouter>
      
    </Myprovider>
  );
}

export default App;
