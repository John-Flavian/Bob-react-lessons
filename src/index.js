import React from 'react';
import ReactDOM, { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';



function MyApp() {
  render(
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )

}

ReactDOM.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
