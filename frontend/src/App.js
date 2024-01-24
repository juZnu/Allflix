
import './App.css';
import Landing from './Components/Landing';

import { Myprovider } from './Context/Myprovider';
import { Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <Myprovider >
      
        <Routes>
          <Route path='/' element={<Landing active={true}/>}/>
          <Route path='/signup' element={<Landing active={false}/>}/>
          <Route path='/movies' element={<Landing active={false}/>}/>
          <Route path='/about' element={<Landing active={false}/>}/>
        </Routes>
    
    </Myprovider>
  );
}

export default App;
