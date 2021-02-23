import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoListState from './context/TodoListState';

ReactDOM.render(
  <React.StrictMode>
    <TodoListState>
      <App />
    </TodoListState>
  </React.StrictMode>,
  document.getElementById('root')
);
