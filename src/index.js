import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let store = createStore(reducers);

render(
    <Provider store={store}>
        <Router>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
