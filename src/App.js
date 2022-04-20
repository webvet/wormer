import cat from './cat-icon.jpg';
import dog from './dog-icon.jpg';
/*import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./cat-icon.jpg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
      <img src={cat} alt="" width="50%" />
      <img src={dog} alt="" width="50%" />
      </div>
    )
  }
}

export default App;