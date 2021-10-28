import React from 'react';
import 'ui-neumorphism/dist/index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Stats from './components/Stats';
import { Routes } from './constants';
import './App.css';

const App = () => (
    <Router>
        <Route path={Routes.HOME} exact component={Home} />
        <Route path={Routes.STATS} exact component={Stats} />
    </Router>
);

export default App;
