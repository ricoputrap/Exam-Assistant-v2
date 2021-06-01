import {useState, useEffect} from 'react'
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import { useStateValue } from "./context/StateProvider";
import Teacher from './components/Teacher/Teacher'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home(){
  const [{ token }, dispatch] = useStateValue();
  
  return (
    <div className="App">
      {token ? <Dashboard /> : <Login dis={dispatch}/> }
    </div>
  )
}
function App() {



  return (
     <Router>

      <Switch>
          <Route path="/teacher">
            <Teacher />
          </Route>
          <Route path="/">
            <Home />
          </Route>


      </Switch>

    </Router>
  );
}

export default App;
