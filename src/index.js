import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

//import semantic ui css
import {Button, List, Card, Modal} from 'semantic-ui-react';
import './styles/semantic-ui-css/semantic.min.css';

//import components
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Staffing from './components/Staffing';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={About}/>
        <Route path='/WhatWeDo' component={WhatWeDo}/>
        <Route path='/Staffing' component={Staffing}/>
        <Route path='/Careers' component={Careers}/>
        <Route path='/ContactUs' component={ContactUs}/>
      </Switch>
    </App>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
