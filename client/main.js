import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import Home from './Home.js';

import City from "./City.js";
import NewCity from "./NewCities.js";
import Activity from './Activity.js';


ReactDOM.render(
    <div>
      <body>

        <Router history={hashHistory}>
            <Route path="/" component={Home}/>
            <Route path="/newCity" component={NewCity}/>
            <Route path="/city/:id" component={City} />
            <Route path="/event/:id" component={Activity} />
            <Route path="*" component={() => <p>Page Not Found</p>}/>
        </Router>
      </body>
    </div>
    ,
    document.getElementById('root')
);

if (module.hot)
    module.hot.accept();
