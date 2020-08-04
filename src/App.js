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

const myStyles = {
    color: "yellow", 
    backgroundColor: "#334546",
    fontSize: 40,
    width: "200px"
}

  return (
    <div>
     <h1 style={myStyles}>Good {timeOfDay}!</h1>
    </div>
  )
}

export default App;