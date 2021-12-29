import logo from './logo.svg';
import './App.css';
// Серый если не встроен
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Встроили */}
        <Fcomponent name="Alex" />
        <Ccomponent />
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
        in
      </header>
    </div>
  );
}

export default App;
