import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/nav-bar";
import Apps from "./components/apps/apps";
import Games from "./components/games/games";
import Home from "./components/home";
import Articles from "./components/articles/articles";
import BestProduct from "./components/best product/bestProducts";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/apps">
          <Apps />
        </Route>
        <Route exact path="/games">
          <Games />
        </Route>
        <Route exact path="/articles">
          <Articles />
        </Route>
        <Route exact path="/bestproducts">
          <BestProduct />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
