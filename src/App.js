import logo from './logo.svg';
import './App.css';

function App() {
  var  a="pintu karode or chhatrapal ji karode "
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
      </header>
      <div className='container display-2 '>{a}</div>
    </div>
    
  );
}

export default App;
