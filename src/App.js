import logo from './logo.svg';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Picture from './components/Picture';
import React, { useEffect, useState } from "react";
import RecipeScreen from "./components/RecipeScreen"
import NavigationBar from './components/NavigationBar';
import Image from './mainpic.png'
import CreateRecipeScreen from './components/CreateRecipeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import Wrapper from './components/Wrapper';

const Home = () => {
  const [categories, setCategories] = useState([])

  const handleCategoryFetch = (newValue) => {
    setCategories(newValue.map(c => c.stringName))
  }

  console.log('new value', categories)
  return (
    <div className="everything">
          <div className="App">
            <NavigationBar />
            <WelcomeMessage 
                first="Welcome to Elipe."
                second="A collection of"
                third="student recipes."
                forth="Easy, cheap and fast recipes I am"
                fifth="saving for future reference."
                hasButtons={true} 
                categories={categories}
                />
            <Picture link={Image} />
            
          </div>
        
            <div className="AppColumn">
              <Wrapper
                onChange={handleCategoryFetch} />

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
      <Route path="/create" component={withRouter(CreateRecipeScreen)} />
      </Switch>
      
    </Router>

  );
}

export default App;
