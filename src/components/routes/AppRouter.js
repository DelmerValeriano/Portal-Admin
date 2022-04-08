import React, { useContext, useEffect, useState, useCallback } from "react";
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { Login } from "../pages";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { DashboardRouter } from "./DashboardRouter";
import { FirebaseContext } from '../../firebase';
import { types } from "../commons/type";
import { Loading } from "../atoms";

export const AppRouter = () => {
    const { firebase, user, dispatch } = useContext(FirebaseContext);
    const [load, setLoad] = useState(false);
    const authState = useCallback(() => {
        firebase.auth.onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch({
                    type: types.login,
                });
            }
            setLoad(true)
        });
    }, [dispatch, firebase.auth]);

    useEffect(() => {
        if (dispatch) {
            authState();
        }
    }, [dispatch, authState]);

    if (load) {
        return (
            <Router>
                <Switch>
                    <PublicRoute exact path="/Login" component={Login} isAuthenticated={user.logged} />
                    <PrivateRoute path="/" component={DashboardRouter} isAuthenticated={user.logged} />
                </Switch>
            </Router>
        )
    } else {
        return <Loading />
    }
}
