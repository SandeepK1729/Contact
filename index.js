import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const user = 'Sandeep';
const greet = <p>Hello, {user}!</p>;
const root = document.getElementById('root');

ReactDOM.render(<h1>Hello, React!</h1>, root);

class Counter extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p> Count is {this.state.count} </p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, root);
