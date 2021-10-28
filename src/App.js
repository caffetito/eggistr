import React from 'react';
import 'ui-neumorphism/dist/index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import { Routes } from './constants';
import './App.css';

const App = () => (
    <Router>
        <Route path={Routes.HOME} exact component={Home} />
    </Router>
);

export default App;
