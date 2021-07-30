import logo from './logo.svg';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Picture from './components/Picture';
import React, { useEffect, useState } from "react";
import RecipeScreen from "./components/RecipeScreen"
import NavigationBar from './components/NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useLocation
} from "react-router-dom";
import RecipesList from './components/RecipesList';
import RecipeMessage from './components/RecipeMessage';
import CategoriesList from './components/CategoriesList';
import Wrapper from './components/Wrapper';
import Recipe from './components/Recipe';

const Home = () => {
  return (
    <div className="everything">
          <div className="App">
            <NavigationBar />
            <WelcomeMessage />
            <Picture />
            
          </div>
        
            <div className="AppColumn">
              <Wrapper />

            </div>
      </div>
  )

}


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" exact component={Home} />
      <Route path="/recipe" forceRefresh={true} component={withRouter(RecipeScreen)}  />
      </Switch>
      
    </Router>

  );
}

export default App;
