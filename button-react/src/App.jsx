/* eslint-disable react/jsx-no-undef */
// import { useState } from 'react'
import './App.css'
import Counter from "./Counter"


function App() {
  return (
    <>
      <h1 className='head'>Namaste React</h1>
    <div className="comple">

    <div className="box1">
      <Counter/>

    </div>
    <div className='box2'>
    <Counter/>
    </div> 
    <div className='box3'>
    <Counter/>
    </div> 
    </div>
    </>
  );
}

export default App
