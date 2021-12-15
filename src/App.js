import logo from './logo.svg';
import './App.css'; 
//import Hello from './components/Hello';
import Button from './components/Button';
import Message from './components/Message';
import Greet from './components/Greet';
import NavBar from './components/NavBar';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. rgtoa_
        </p>
        <img src="https://cdn130.picsart.com/323117385422201.gif?to=crop&type=webp&r=-1x-1&q=95&width=1920" alt="spiderman"></img>
        <Greet name="Peter Parker"/>
        <Message/>
        <Button/>
        <Employee/>
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
