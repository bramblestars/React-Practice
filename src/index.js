
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App'

import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

debugger
root.render(<App />);