import React from 'react';
import './App.css';


function App() {
const date = new Date();

  return (
    <div>
     <h1>It is currently {date.getHours() % 12} 'o Clock Today. </h1>
    </div>
  )
}

export default App;