import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

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

    a {
        color: rgba(0, 0, 255, 0.7);
        text-decoration: none;

        &:visited {
            color: rgba(0, 0, 255, 0.7);
        }
    }

    .income {
        color: green;
    }

    .expense {
        color: red;
    }
`

ReactDOM.render((
    <BrowserRouter>
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <App />
        </Provider>
    </BrowserRouter>
), document.getElementById('root'));
