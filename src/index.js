import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import App from './App';

injectGlobal`
    * {
        box-sizing: border-box;
    }

    body,
    html {
        margin: 0;
        padding: 0;
        width: 100vw;
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
        font-size: 14px;
    }
`

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
