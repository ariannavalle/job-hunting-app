import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import AUTH_SERVICE from "./services/AuthService";
import CARD_SERVICE from "./services/CardService";
import COLUMN_SERVICE from "./services/ColumnService";

import Signup from "./components/Authentication/Signup/signup";
import Login from "./components/Authentication/Login/login";
import Navbar from "./components/NavBar/navbar";
import Board from "./components/Board/Board";

import ProtectedRoute from "./components/ProtectedRoute";

export default class App extends React.Component {
  state = {
    currentUser: null,
    cards: [],
    columns: [],
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = () => {
    Promise.all([
      CARD_SERVICE.getCards(),
      COLUMN_SERVICE.getColumns(),
      AUTH_SERVICE.getAuthenticatedUser(),
    ])
      .then((responseFromServer) => {
        const cards = responseFromServer[0].data?.cards?.reduce(
          (a, v) => ({ ...a, [v._id]: v }),
          {}
        );
        const columns = responseFromServer[1].data?.columns?.reduce(
          (a, v) => ({ ...a, [v._id]: v }),
          {}
        );
        const { user } = responseFromServer[2].data; //last
        this.setState({ cards, columns, currentUser: user });
      })
      .catch((err) => console.log(err));
  };

  updateUser = (user) => {
    this.setState({ currentUser: user }, this.fetchData);
  };

  replaceColumns = (column1, column2) => {
    this.setState({
      columns: {
        ...this.state.columns,
        [column1._id]: column1,
        [column2._id]: column2,
      },
    });
  };

  render() {
    // console.log("user: ", this.state.currentUser);
    // console.log("cards: ", this.state.cards);
    // console.log("columns: ", this.state.columns);
    return (
      <div className="App">
        <BrowserRouter>
          {this.state.currentUser && (
            <nav>
              <Navbar
                currentUser={this.state.currentUser}
                onUserChange={this.updateUser}
              />
            </nav>
          )}

          <Switch>
            {/* <Route path='/somePage' component={someComponent} /> */}

            <Route
              path="/signup"
              render={(props) => (
                <Signup {...props} onUserChange={this.updateUser} />
              )}
            />
            <Route
              path="/login"
              render={(props) => (
                <Login {...props} onUserChange={this.updateUser} />
              )}
            />

            {/* if user is logged in, render the board component at the root path*/}
            {this.state.currentUser && (
              <ProtectedRoute
                path="/"
                authorized={this.state.currentUser}
                redirect={"/signup"}
                render={(props) => (
                  <Board
                    {...props}
                    currentUser={this.state.currentUser}
                    cards={this.state.cards}
                    columns={this.state.columns}
                    onCardsChange={this.updateCards}
                    onColumnsChange={this.updateColumns}
                    replaceColumns={this.replaceColumns}
                  />
                )}
              />
            )}

            {/* otherwise render the signup component in the root path*/}
            <Route
              path="/"
              render={(props) => (
                <Signup {...props} onUserChange={this.updateUser} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
