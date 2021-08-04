import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
         <Route path="/Login">
          <Login />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
