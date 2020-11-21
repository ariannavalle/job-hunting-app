import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AUTH_SERVICE from './services/AuthService';
import CARD_SERVICE from './services/CardService'
import COLUMN_SERVICE from './services/ColumnService'
import Signup from './components/Authentication/Signup/Signup';
import Login from './components/Authentication/Login/Login';
import Board from './components/Board/Board'
import ProtectedRoute from './components/ProtectedRoute';
import Charting from './components/Chart/Charting'

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
        const cards = responseFromServer[0].data?.cards?.reduce(this.reducerCardColumns, {});
        const columns = responseFromServer[1].data?.columns?.reduce(this.reducerCardColumns, {});
        const { user } = responseFromServer[2].data;
        this.setState({ cards, columns, currentUser: user, loading: false });
      })
      .catch((err) => console.log(err));
  };

  reducerCardColumns = (a, v) => ({ ...a, [v._id]: v });

  updateUser = (user, columns) => {
    this.setState({ currentUser: user, columns });
  };

  updateCardState = (cards, successMessage) => {
    const updateCard = { ...this.state.cards, [cards._id]: cards };
    this.setState({ cards: updateCard, successMessage });
  };

  updateColumnState = (columns, successMessage) => {
    const updateColumn = { ...this.state.columns, [columns._id]: columns };
    this.setState({ columns: updateColumn, successMessage });
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

  editColumn = (id, data) => {
    let updatedColumn = this.state.columns[id]
    updatedColumn.title = data
    COLUMN_SERVICE.updateColumn(id, updatedColumn)
      .then((res) => {
        const { successMessage } = res.data;
        COLUMN_SERVICE.getColumns()
          .then((response) => {
            this.setState({
              columns: response.data.columns.reduce(this.reducerCardColumns, {}),
              successMessage,
            });
          })
      })
  }

  deleteColumn = (id) => {
    COLUMN_SERVICE.deleteColumn(id)
      .then((response) => {
        const { successMessage } = response.data;
        const columns = { ...this.state.columns };
        delete columns[id];
        this.setState({
          columns,
          successMessage,
        });
      })
  }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>

          <Switch>
            {/* <Route path='/somePage' component={someComponent} /> */}

            <Route path='/signup' render={props => <Signup {...props} onUserChange={this.updateUser} />} />
            <Route path='/login' render={props => <Login {...props} onUserChange={this.updateUser} />} />
            <ProtectedRoute path='/charting' render={props => <Charting {...props} cards={this.state.cards} columns={this.state.columns} />} />

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
                      editColumn={this.editColumn}
                      deleteColumn={this.deleteColumn}
                      fetchData={this.fetchData}
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
