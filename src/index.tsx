import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './modules/App';
import Layout from './common/components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Layout>
      <Route exact path="/" component={App} />
    </Layout>
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
