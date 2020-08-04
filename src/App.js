import React from 'react';
import './App.css';


function App() {
const date = new Date();
const hours = date.getHours();

let timeOfDay;

if (hours < 12) {
  timeOfDay = "Morning";
}
else if (hours >= 12 && hours < 17) {
  timeOfDay = "Afternoon";
}
else {
  timeOfDay = "Night";
}

  return (
    <div>
     <h1 style={{color: "yellow", backgroundColor: "#334546" }}>Good {timeOfDay}!</h1>
    </div>
  )
}

export default App;