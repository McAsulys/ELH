import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import Home from './Home.js';
import City from './City.js';
import Activity from './Activity.js';

ReactDOM.render(
    <div>
        <nav>
            <a href="index.html">Home</a>
            <a href="https://www.google.com">Charts</a>
            <a href="https://www.google.com">About</a>
        </nav>
        
        <Router history={hashHistory}>
            <Route path="/" component={Home}/>
            <Route path="/city/:id" component={City} />
            <Route path="/event/:id" component={Activity} />
            <Route path="*" component={() => <p>Page Not Found</p>}/>
        </Router>
        <footer> Footer</footer>
    </div>
    ,
    document.getElementById('root')
);

if (module.hot)
    module.hot.accept();

