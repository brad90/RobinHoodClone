import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Landing from "./pages/Landing"
import Login from "./pages/Login"
import CompanyProfile from "./pages/CompanyProfile"
import StockListDash from "./pages/StockListDash"
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact><Landing /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/stocklist/dashboard"><StockListDash/></Route>
        <Route path="/company/:market/:ticker"><CompanyProfile/></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
