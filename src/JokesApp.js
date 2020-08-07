import React from 'react'
import Joke from './Components/Joke'
import JokesData from './Components/JokesData'
import './App.css'

function JokesApp() {

  //Test function
  const nums = [1,2,3,4,5,6,7,8];
  const doubled = nums.map(function(num) {
      return num * 2
  });
console.log(doubled)

  const JokesComponents = JokesData.map((joke) => {
return (
  <Joke question={joke.question} punchLine={joke.punchLine} key={joke.id} />
)
  })

    return (
        <div className="joke-items">
      {JokesComponents}
      </div>
    )
}

export default JokesApp