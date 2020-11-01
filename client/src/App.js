import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AUTH_SERVICE from './services/AuthService';
import CARD_SERVICE from './services/CardService'

import Signup from './components/Authentication/Signup/signup';
import Login from './components/Authentication/Login/login';
import Navbar from './components/NavBar/navbar'
import Board from './components/Board/Board'

import ProtectedRoute from './components/ProtectedRoute';


export default class App extends React.Component {
  state = {
    currentUser: null,
    cards: [],
  };

  componentDidMount = () => {
    Promise.all([CARD_SERVICE.getCards(), AUTH_SERVICE.getAuthenticatedUser()])
      .then(responseFromServer => {
        const { cards } = responseFromServer[0].data;
        const { user } = responseFromServer[1].data;

        this.setState({ cards, currentUser: user });
      })
      .catch(err => console.log(err));
  };


  updateUser = user => {
    this.setState({ currentUser: user });
  };

  render() {
    console.log('user in client: ', this.state.currentUser);
    console.log('cards: ', this.state.cards);
    return (
      <div className='App'>
        <BrowserRouter>
          <nav>
            <Navbar currentUser={this.state.currentUser} onUserChange={this.updateUser} />
          </nav>
          <Switch>
            {/* <Route path='/somePage' component={someComponent} /> */}
            <Route path='/signup-page' render={props => <Signup {...props} onUserChange={this.updateUser} />} />
            <Route path='/login-page' render={props => <Login {...props} onUserChange={this.updateUser} />} />

          {this.state.currentUser && 
          (<ProtectedRoute
              path='/'
              authorized={this.state.currentUser}
              redirect={'/signup-page'}
              render={props => <Board {...props} currentUser={this.state.currentUser} cards={this.state.cards} />}
            />)
            }
            


          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
