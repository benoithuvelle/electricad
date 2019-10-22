import React, { useState } from 'react';
import Canvas from './components/Canvas'
import './App.css'


function App() {

  console.log('app rendering')
  
  return (
    <div className="App" style={{overscrollBehavior : 'none'}}>
      <Canvas
      />
    </div>
  );
}

export default App;
