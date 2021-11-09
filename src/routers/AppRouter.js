import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Downloads } from '../components/download/Downloads';
import { Footer } from '../components/home/footer/Footer';
import { Home } from '../components/home/Home';
import { Navbar } from '../components/home/navbar/Navbar';
import { New } from '../components/news/New';
import { NewsById } from '../components/news/NewsById';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <div style={{ position: 'relative', minHeight: '90vh' }}>
                <Switch>
                    <Route exact path='/noticias/:id' component={NewsById} />
                    <Route exact path='/noticias' component={New} />
                    <Route exact path='/descargables' component={Downloads} />
                    <Route path='/' component={Home} />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
};
