import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App'

const h2El = React.createElement('h2', null, 'What a nice day');
const element = React.createElement('h1', {className: 'title'}, 'Hello World', h2El);
const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

debugger
root.render(<App />);