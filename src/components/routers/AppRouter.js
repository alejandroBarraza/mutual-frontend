import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../home/Home';
import { News } from '../news/News';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/noticias' component={News} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    );
};
