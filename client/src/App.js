import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AUTH_SERVICE from './services/AuthService';
import CARD_SERVICE from './services/CardService'
import COLUMN_SERVICE from './services/ColumnService'

import Signup from './components/Authentication/Signup/Signup';
import Login from './components/Authentication/Login/Login';
import Board from './components/Board/Board'

import ProtectedRoute from './components/ProtectedRoute';
import column from './components/Column/Column';


export default class App extends React.Component {
  state = {
    currentUser: null,
    loading: true,
    cards: [],
    columns: [],
    successMessage: null
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
        this.setState({ cards, columns, currentUser: user, loading: false });
      })
      .catch((err) => console.log(err));
  };

  updateUser = user => {
    this.setState({ currentUser: user });
  };

  updateCardState = cards => {
    const updateCard = { ...this.state.cards, [cards._id]: cards };
    this.setState({ cards: updateCard });
  };

  updateColumnState = columns => {
    const updateColumn = { ...this.state.columns, [columns._id]: columns };
    this.setState({ columns: updateColumn });
  };

  replaceColumns = async (column1, column2) => {
    this.setState({
      columns: {
        ...this.state.columns,
        [column1._id]: column1,
        [column2._id]: column2,
      },
    });
    await Promise.all([COLUMN_SERVICE.updateColumn(column1._id, column1), COLUMN_SERVICE.updateColumn(column2._id, column2)]);
  };

  editCard = (id, data) => {
    CARD_SERVICE.updateCard(id, data)
      .then((response) => {
        const { successMessage } = response.data;
        const columnId = Object.values(this.state.columns).find(col => col.cards.find(card => card._id === id))._id;

        COLUMN_SERVICE.getColumnDetails(columnId)
          .then((res) => {
            console.log(res.data.column)
            this.setState({
              columns: { ...this.state.columns, [columnId]: res.data.column },
              successMessage,
            });
          })
      })
      .catch(err => {
        console.log(err)
      });

  }

  deleteCard = (id) => {
    CARD_SERVICE.deleteCard(id)
      .then((deleteRes) => {
        const { successMessage } = deleteRes.data;
        const columnId = Object.values(this.state.columns).find(col => col.cards.find(card => card._id === id))._id;
        const column = {
          ...this.state.columns[columnId],
          cards: this.state.columns[columnId].cards.filter(card => card._id !== id),
        };
        const cards = { ...this.state.cards };
        delete cards[id];
        this.setState({
          columns: { ...this.state.columns, [columnId]: column },
          cards,
          successMessage,
        });
      })
      .catch(err => {
        console.log(err)
      });
  }

  deleteColumn = (id) => {
    COLUMN_SERVICE.deleteColumn(id)
    .then((response)=>{
      const { successMessage } = response.data;
      const columns = Object.values(this.state.columns).filter(column => column._id !== id)
      this.setState({
        columns,
        successMessage,
      }); 
    })
  }

  render() {
    console.log('user: ', this.state.currentUser);
    console.log('cards: ', this.state.cards);
    console.log('columns: ', this.state.columns);
    return (
      <div className='App'>
        <BrowserRouter>

          <Switch>
            {/* <Route path='/somePage' component={someComponent} /> */}

            <Route path='/signup' render={props => <Signup {...props} onUserChange={this.updateUser} />} />
            <Route path='/login' render={props => <Login {...props} onUserChange={this.updateUser} />} />


            {/* if user is logged in, render the board component at the root path*/}
            {!this.state.loading
              ? (
                <ProtectedRoute
                  path='/'
                  authorized={this.state.currentUser}
                  redirect={'/signup'}
                  render={props =>
                    <Board {...props}
                      currentUser={this.state.currentUser}
                      cards={this.state.cards}
                      columns={this.state.columns}
                      successMessage={this.state.successMessage}
                      onUserChange={this.updateUser}
                      updateCardState={this.updateCardState}
                      updateColumnState={this.updateColumnState}
                      replaceColumns={this.replaceColumns}
                      deleteCard={this.deleteCard}
                      editCard={this.editCard}
                      deleteColumn={this.deleteColumn}
                    />}
                />)
              : <Route path='/' render={props => <div></div>} />
            }
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
