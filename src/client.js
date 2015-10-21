import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import HelloWorld from './Components/HelloWorld'
import Counterizer from './Components/Counterizer'
import Greeter from './Components/Greeter'
import Counter from './Components/Counter'
import HelloworldApp from './Components/HelloworldApp'

import { Router, Route, Link } from 'react-router';

const routes = (
        <Router>
            <Route path="/" component={HelloworldApp}>
            <Route path="/hello/:name" component={Greeter}></Route>
        </Route>

        </Router>
    );


ReactDOM.render(
    routes,
    document.getElementById('app')

    );




