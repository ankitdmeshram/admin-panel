import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore ,combineReducers } from 'redux';
import '../node_modules/fullcalendar/dist/fullcalendar.min.js';
import  UIreducer from './store/reducers/reducer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    ui_red:UIreducer,
});
const store = createStore(rootReducer);
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
