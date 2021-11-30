import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Downloads } from '../components/download/Downloads';
import { Form } from '../components/form/Form';
import { Footer } from '../components/home/footer/Footer';
import { Home } from '../components/home/Home';
import { Navbar } from '../components/home/navbar/Navbar';
import { NewsById } from '../components/news/NewsById';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/noticias/:id' component={NewsById} />
                <Route exact path='/descargables' component={Downloads} />
                <Route exact path='/form' component={Form} />
                <Route path='/' component={Home} />
            </Switch>
            <Footer />
        </Router>
    );
};

