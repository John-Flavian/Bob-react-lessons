import React from 'react'
import Joke from './Components/Joke'
import './App.css'

function JokesApp() {
    return (
        <div className="joke-items">
      <Joke question= "what just happened" punchLine= "I just fell off the roof" />
      <Joke question= "what's your name" punchLine= "Mr. Jokes a lot" />
      <Joke question= "where are you" punchLine= "Somewhere on earth" />
      <Joke punchLine= "Give me some punches" />
      <Joke question= "Should we laugh or what" punchLine= "Just try to stop me from talking" />
      </div>
    )
}

export default JokesApp