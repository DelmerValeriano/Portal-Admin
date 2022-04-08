import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TableUser from '../../components/atoms/TableUser';
import Home from '../pages/home';
import Drawer from '../pages/Drawer';
import { Footer } from '../atoms';

export const DashboardRouter = () => {
    return (
        <>
            <Drawer />
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/TableUser" component={TableUser} />
                <Redirect to="/Home" />
            </Switch>
            <Footer/>
        </>
    )
}