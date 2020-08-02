import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';




function MyInfo() {
  return(
    <div>
      <h1>John Flavian</h1>
      <p>I'm a curious web dev that is learning React. </p>
      <p>Places that i'll like to visit are:</p>
      <ul>
        <li>United States of America</li>
        <li>Brazil</li>
        <li>Rome</li>
      </ul>
    </div>
  )
}



ReactDOM.render(
  <React.StrictMode>
  <MyInfo />
  </React.StrictMode>, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
