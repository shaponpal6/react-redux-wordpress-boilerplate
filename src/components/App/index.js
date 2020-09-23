import React from 'react';
import Header from '../Header';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import './app.module.css';

const App = () => (
  <div className='container'>
    <h2 className='title'>React Redux App</h2>
    <Header />
    <VisibleTodoList />
    <AddTodo />
  </div>
);

export default App;
