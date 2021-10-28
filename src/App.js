import React from 'react';
import 'ui-neumorphism/dist/index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Stats from './components/Stats';
import NotFound from './components/NotFound';
import { Routes } from './constants';
import './App.css';

const App = () => (
    <Router>
        <Switch>
            <Route path={Routes.HOME} exact component={Home} />
            <Route path={Routes.STATS} exact component={Stats} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default App;
