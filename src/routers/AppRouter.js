import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Downloads } from '../components/download/Downloads';
import { Home } from '../components/home/Home';
import { Navbar } from '../components/home/navbar/Navbar';
import { New } from '../components/news/New';
import { NewsById } from '../components/news/NewsById';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/noticias/:id' component={NewsById} />
                <Route exact path='/noticias' component={New} />
                <Route exact path='/descargables' component={Downloads} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    );
};
