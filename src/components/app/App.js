import React from 'react';
import {Route, BrowserRouter as Router , Switch} from 'react-router-dom'
// import Home from '../../routes/home';
// import NavBar from '../navbar';
import SignIn from '../../routes/authentication/signIn'
import SignUp from '../../routes/authentication/signUp'
import Home from '../../routes/home/home'

function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <Home /> */}
      <Router>
        <Switch>
          <Route path="/" exact component= {Home} />
          <Route path="/signin" exact component= {SignIn} />
          <Route path="/accoutrequest" component= {SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
