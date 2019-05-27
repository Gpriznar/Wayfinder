import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Breakpoint, { BreakpointProvider } from 'react-socks';
import AddWebsite from './components/AddWebsite';
import BaseLayout from './components/BaseLayout';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:8080/',
});

const client = new ApolloClient({
  cache,
  link,
});

ReactDOM.render(
  <BreakpointProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/addwebsite" component={AddWebsite} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </ApolloProvider>
  </BreakpointProvider>,

  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
