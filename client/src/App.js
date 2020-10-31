import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AUTH_SERVICE from './services/AuthService';

import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';

import ProtectedRoute from './components/ProtectedRoute';


export default class App extends React.Component {
  state = {
    currentUser: null,

  };

  componentDidMount = () => {
    AUTH_SERVICE.getAuthenticatedUser()
      .then(responseFromServer => {
        const { user } = responseFromServer.data;

        this.updateUser(user);
      })
      .catch(err => console.log(err));
  };

  updateUser = user => {
    this.setState({ currentUser: user });
  };

  render() {
    console.log('user in client: ', this.state.currentUser);
    return (
      <div className='App'>
        <BrowserRouter>
          <nav>
            <NavBar currentUser={this.state.currentUser} onUserChange={this.updateUser} />
          </nav>
          <Switch>
            {/* <Route path='/somePage' component={someComponent} /> */}
            <Route exact path='/' render={props => <Home />} />
            <Route path='/signup-page' render={props => <Signup {...props} onUserChange={this.updateUser} />} />
            <Route path='/login-page' render={props => <Login {...props} onUserChange={this.updateUser} />} />


          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
