import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import ProfileShow from '../components/Profile/ProfileShow';
import Home from '../components/Home/Home'
import LoginForm from '../components/Auth/LoginForm';
import Register from '../components/Auth/Register'
import Profile from '../components/Profile/Profile';
import ProfileEdit from '../components/Profile/ProfileEdit';
import AllPosts from '../components/Post/AllPosts'

import NewPost from '../components/Post/NewPost'

import { useRecoilValue } from "recoil";
import { loggedInState } from '../recoil/selectors';


const Routes = (props) => {
    const loggedIn = useRecoilValue(loggedInState);
    return (  
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={LoginForm} />
            {loggedIn && (
                <Switch>
                <Route path="/home" component={ AllPosts } />
                <Route path="/profile/:id/edit" component={ ProfileEdit } />
                <Route path="/profile/:id" component={ ProfileShow } />
                <Route path="/profile" component={ Profile } />
                <Route path="/new_post" component={ NewPost } />
                </Switch>
            )}
            <Route path='*' render={() => <h1>"not found"</h1>} />
        </Switch>
    );
}
 
export default Routes;