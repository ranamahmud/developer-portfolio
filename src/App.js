import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
