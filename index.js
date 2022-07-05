import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const user = 'Sandeep';
const greet = <p>Hello, {user}!</p>;
const root = document.getElementById('root');

ReactDOM.render(<h1>Hello, React!</h1>, root);

let counter = 0;

function Message(props) {
  return <p>{props.count}</p>;
}

function show() {
  counter++;
  ReactDOM.render(<Message count={counter} />, root);
}
setInterval(show, 1000);
