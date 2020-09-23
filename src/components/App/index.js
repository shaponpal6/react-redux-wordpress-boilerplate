import React from 'react';
import Footer from '../Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import './app.module.css';

// console.log(styles);

const App = () => (
  <div className='container'>
    <Footer />
    <VisibleTodoList />
    <AddTodo />
  </div>
);

export default App;
