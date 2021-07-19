import logo from './logo.svg';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Picture from './components/Picture';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
    <div className="App">
      <Router>
<nav className="Navigation">
        <ul className="List">
          <li>
            <Link href="#">HOME</Link>
          </li>
          <li>
            CREATE
          </li>
          <li>
            ABOUT ME
          </li>
          <li>
            CODE
          </li>
        </ul>
      </nav>
      </Router>
      
      <WelcomeMessage />
      <Picture />
      
    </div>
    <WelcomeMessage />
    </div>
  );
}

export default App;
