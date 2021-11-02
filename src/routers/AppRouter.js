import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../components/home/Home';
import { Navbar } from '../components/home/navbar/Navbar';
import { NewsById } from '../components/new/NewsById';
import { News } from '../components/news/News';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/noticias' component={News} />
                <Route exact path='/noticia/:id' component={NewsById} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    );
};
