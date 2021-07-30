import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    useLocation
  } from "react-router-dom";

const NavigationBar = () => {
    return ( 
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
     );
}
 
export default NavigationBar;