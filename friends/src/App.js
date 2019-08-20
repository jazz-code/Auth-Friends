import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
// import FriendsList from './components/FriendsList';
// import PrivateRoute from "./components/PrivateRoute"


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
        <Route path="/login" component={Login} />
        {/* <PrivateRoute exact path="/protected" component={FriendsList} /> */}
        {/* <PrivateRoute path="/anotherRoute" component={SomeOtherComponent} /> */}
      </div>
    </Router>
  );
}

export default App
