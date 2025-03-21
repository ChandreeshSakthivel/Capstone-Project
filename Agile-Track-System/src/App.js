import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import UserProfile from './components/UserProfile/UserProfile';
import SignUp from './components/Signup/SignUp';
import { UserProvider, UserContext } from '../src/context/UserContext';
import './styles.css';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="app">
          <Nav />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profiles" component={UserProfile} />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
};

const Nav = () => {
  const { user, logout } = useContext(UserContext);
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/" className="nav-link">Dashboard</Link>
        {user && <Link to="/profiles" className="nav-link">Profiles</Link>}
      </div>
      <div className="nav-right">
        {user ? (
          <button onClick={handleLogout} className="nav-button">Logout</button>
        ) : (
          <Link to="/login" className="nav-link">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default App;
