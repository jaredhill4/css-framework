import './framework/scss/index.scss';
import './site/scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import ScrollToTop from './site/js/ScrollToTop';
import App from './site/js/App';

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);
