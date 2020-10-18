import React from 'react';
import Home from '../../routes/home';
import NavBar from '../navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from '../../routes/login/SignIn';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
