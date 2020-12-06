import React from 'react';
import {Route, BrowserRouter as Router , Switch} from 'react-router-dom'
// import Home from '../../routes/home';
// import NavBar from '../navbar';
import SignIn from '../../routes/authentication/signIn'
import SignUp from '../../routes/authentication/signUp'

function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <Home /> */}
      <Router>
        <Switch>
          <Route path="/" exact component= {SignIn} />
          <Route path="/signUp" component= {SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
