import React from 'react';
import './App.css';


function App() {
const date = new Date();
const hours = date.getHours();
const myStyles = {
  fontSize: 40,
  backgroundColor: "whitesmoke"
}

let timeOfDay;

if (hours < 12) {
  timeOfDay = "Morning";
  myStyles.color = "red";
}
else if (hours >= 12 && hours < 17) {
  timeOfDay = "Afternoon";
  myStyles.color = "green";
}
else {
  timeOfDay = "Night";
  myStyles.color = "blue";
}



  return (
    <div>
     <h1 style={myStyles}>Good {timeOfDay}!</h1>
    </div>
  )
}

export default App;