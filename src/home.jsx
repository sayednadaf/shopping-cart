import React, { Component } from 'react';
import {BrowserRouter, Router, Route,Switch} from 'react-router-dom';
import LoginForm from '../src/components/login';
import App from '../src/App';
import createBrowserHistory from 'history/createBrowserHistory';

const customhistory = createBrowserHistory();

class Home extends Component{
    render(){
        return(
            <Router history={customhistory}>
            <div>
                <Switch>
                <Route exact path="/" component={LoginForm} />
                <Route path="/App" component={App} exact />
                </Switch>
                </div>
            </Router>
        )
    }
}

export default Home;