import React,{useState} from 'react'
import { Mycontext } from './Mycontext';

export const Myprovider = ({children}) => {
    const [user,setUser] = useState({status:false})
    
  return (
    <Mycontext.Provider value={[user,setUser]}>
        {children}
    </Mycontext.Provider>
    
  );
}
