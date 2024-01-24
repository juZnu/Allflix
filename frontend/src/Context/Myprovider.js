import React,{useState} from 'react'
import { Mycontext } from './Mycontext';

export const Myprovider = ({children}) => {
    const [user,setUser] = useState({status:false})
    const [movies,setMovies] = useState([])
    
  return (
    <Mycontext.Provider value={[user,setUser,movies,setMovies]}>
        {children}
    </Mycontext.Provider>
    
  );
}
