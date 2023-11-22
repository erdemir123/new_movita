
import './App.css';

import { useEffect, useState } from 'react';
import Welcome from './components/Welcome';


function App() {
  const [show,setShow]=useState(true)
  useEffect(()=>{
    setTimeout(()=>setShow(false),2000)
  },[])
  return (
    <>
    {show &&  <Welcome/>}
    {show || <div className="bg-black text-slate-100 h-screen w-100 flex justify-center items-center overflow-hidden flex-col">
      movita
    </div> }
    </>
  );
}

export default App;
