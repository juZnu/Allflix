
import './App.css';
import Landing from './Components/Landing';
import Movies from './Components/Landing/Movies';
import About from './Components/Landing/About';
import { Myprovider } from './Context/Myprovider';
import { Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <Myprovider >
      
        <Routes>
          <Route path='/' element={<Landing active={true}/>}/>
          <Route path='/signup' element={<Landing active={false}/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/about' element={<About />}/>
        </Routes>
    
    </Myprovider>
  );
}

export default App;
