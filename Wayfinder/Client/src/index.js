import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BaseLayout from './components/BaseLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import {Login} from './components/Login.jsx'

ReactDOM.render(

<BrowserRouter>
    <BaseLayout>
        <Switch>

                <Route path='/' exact component={App} />
                {/* <Route path='/login' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
                {/* <Route path='/addwebsite' component={AddWebsite} /> */}

        </Switch>
    </BaseLayout>
</BrowserRouter>





, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
