import React from 'react';
// pull in the React router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import the NavBar
import NavBar from './components/NavBar';


// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>


        </Switch>
      </div>
    </Router>
  )
}

export default App;
