import React from 'react';
import TabBar from '../components/TabBar';
import Recent from './Recent';
import Likes from './Likes';
import Bookmarks from './Bookmarks';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

export default function RESTaurant(props) {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/recent" />
                    </Route>
                    <Route path="/recent">
                        <Recent />
                    </Route>
                    <Route path="/likes">
                        <Likes />
                    </Route>
                    <Route path="/bookmarks">
                        <Bookmarks />
                    </Route>
                </Switch>
                <TabBar />
            </Router>
        </>
    );
}