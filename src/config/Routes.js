import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';

import Profile from '../components/Profile/Profile';
import Home from '../components/Home/Home'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'

const Routes = (props) => {
    return (  
        <div className="main">
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/login" component={ Login } />
                <Route exact path="/register" component={ Register } />
                <Route path="/profile" component={ Profile } />
            </Switch>
        </div>
    );
}
 
export default Routes;