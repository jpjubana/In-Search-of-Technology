import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

//import semantic ui css
import './styles/semantic-ui-css/semantic.min.css';

//import components
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Staffing from './components/Staffing';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';

ReactDOM.render(
  <BrowserRouter basename='/In-Search-of-Technology'>
    <App>
      <Switch>
        <Route exact path='/' component={About}/>
      </Switch>
    </App>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
