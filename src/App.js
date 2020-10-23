import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import Layout from './components/layout/Layout';
import Quote from './components/quote/Quote';
import QuoteResult from './components/quoteResult/QuoteResult';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Quote} />
          <Route exact path="/quote-results" component={QuoteResult} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
