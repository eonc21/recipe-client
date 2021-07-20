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
import RecipesList from './components/RecipesList';

function App() {
  return (
    <div className="everything">
    <div className="App">
      <Router>
        <nav className="Navigation">
        <ul className="List">
          <li>
            <Link className="link" href="#">ALL RECIPES</Link>
          </li>
          <li>
            <Link className="link" href="#">CREATE RECIPE</Link>
          </li>
          <li>
            <Link className="link" href="#">ABOUT ME</Link>
          </li>
          <li>
            <Link className="link" href="#">CODE</Link>
          </li>
        </ul>
      </nav>
      </Router>
      
      <WelcomeMessage />
      <Picture />
      
    </div>
    
      <div className="App">
          <RecipesList />

      </div>
    </div>
  );
}

export default App;
