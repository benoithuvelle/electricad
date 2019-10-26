import React, { useState } from 'react';
import Plan from './components/Plan'
import './App.css'


function App() {

  console.log('app rendering')
  
  return (
    <div className="App" style={{overscrollBehavior : 'none'}}>
      <Plan
      />
    </div>
  );
}

export default App;
