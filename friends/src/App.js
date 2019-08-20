import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import FormikFriendsList from "./components/FriendsList"
import Login from './components/Login';

import PrivateRoute from "./components/PrivateRoute"


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FormikFriendsList} />
        {/* <PrivateRoute path="/anotherRoute" component={SomeOtherComponent} /> */}
      </div>
    </Router>
  );
}

export default App
