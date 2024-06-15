import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextApi from './ContextApi';
import ContextApiAdvanced from './ContextApiAdvanced';
import DynamicContext from './DynamicContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    //    <ContextApiAdvanced/>
    <DynamicContext />
);
