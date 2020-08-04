import React from 'react'

function Jokes(props) {
    return (
        <div>
            <p> {props.question} </p>
            <p> {props.punchLine} </p>
        </div>
    )
}

export default Jokes