import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../components/home/Home';
import { News } from '../components/news/News';

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
