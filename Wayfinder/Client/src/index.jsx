import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { BreakpointProvider } from 'react-socks';

import reducer from './store/reducer';
import AddWebsite from './components/AddWebsite';
import BaseLayout from './components/BaseLayout';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import authLink from './Utils/authLink';
import requireAuth from './components/requireAuth';

import './index.css';
import * as serviceWorker from './serviceWorker';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://poetic-wayfinder-server.herokuapp.com/',
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(link),
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(

  <BreakpointProvider>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              {/* <Route path="/" exact component={App} /> */}
              <Route exact path="/" component={Login} />
              <Route path="/dashboard" component={requireAuth(Dashboard)} />
              <Route path="/addwebsite" component={requireAuth(AddWebsite)} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </BreakpointProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
