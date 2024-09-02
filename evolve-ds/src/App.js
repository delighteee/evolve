import logo from './logo.svg';
import './App.css';
import { buttonStyle } from 'styled-system';
import Button from '/Users/tolulopeadelye/evolve/evolve-ds/src/lib/components/Button.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    <Button label="Button" />
      </header>
    </div>
  );
}

export default App;
