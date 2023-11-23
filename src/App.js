
import './App.css';

import {gsap, Power3} from 'gsap';
import { useEffect, useState } from 'react';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Content from './components/Content';
import Video from './components/Video';


function App() {
  const [show,setShow]=useState(true)
  useEffect(()=>{
    setTimeout(()=>setShow(false),2000)
  },[])
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;
  return (
    <div className='overflow-hidden bg-black'>
    {show &&  <Welcome/>}
    {show || <div>
    <Header timeline = {tl} ease= {ease}/>
      <Content timeline = {tl} />
      <Video timeline = {tl} ease = {ease}/> 
    
    </div> }
    </div>
  );
}

export default App;
