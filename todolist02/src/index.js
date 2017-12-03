import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoList from './TodoList';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TodoList />,document.getElementById('root'));
registerServiceWorker();
