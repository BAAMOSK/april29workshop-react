import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { addTodo, completedTodo, deletedCompletedTodo } from './actions/todos';
import { fetchPeople } from './actions/peoples';
import PostsList from './components/PostsList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    greetings: 'Welcome',
    todo: '',
  };

  componentDidMount() {
    this.props.fetchPeople();
  }

  _handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ''
    });
  }

  _handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  _handleCheck = id => {
    this.props.completedTodo(id);
  }

  _handleDeletedAll = () => {
    this.props.deletedCompletedTodo();
  }

  render() {
    if (this.props.peoples.loading) {
      return <h1>Loading...</h1>;
    } else if (this.props.peoples.error) {
      return <h1>ERRROROOROROROROOROR!</h1>;
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.greetings} to {this.props.name}</h2>
        </div>

        <h1>{this.props.peoples.data.name}</h1>

        <form onSubmit={this._handleSubmit}>
          <input
            onChange={this._handleChange}
            value={this.state.todo}
            type="text"
            name="todo"
            placeholder="add a new todo..."
          />
        </form>

        <hr />

        {this.props.todos.map(({ todo, id, completed }) => (
          <div key={id}>
            <p>{todo}</p>
            <input onChange={() => this._handleCheck(id)} type="checkbox" value={completed} />
          </div>
        ))}

        <hr />

        <button onClick={this._handleDeletedAll}>Delete Completed Todo</button>
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos,
  peoples: state.peoples,
}), { addTodo, completedTodo, deletedCompletedTodo, fetchPeople })(App);
