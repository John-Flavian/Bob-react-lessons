import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp'
//import * as serviceWorker from './serviceWorker';
//import App from './App';
//import MyInfo from "./Components/MyInfo";








ReactDOM.render(
  
  <TodoApp />, document.getElementById('root')
);

/*
removed ReactStrictMode tag, i don't know it's function.
Removed serviceworker too, i don't know it's function.
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
