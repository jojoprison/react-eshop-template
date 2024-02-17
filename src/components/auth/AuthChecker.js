import React from 'react';
import {Navigate, Redirect, Route} from "react-router-dom";

// компонент пишем с заглавной
export const AuthChecker = ({Component, path, authToken}) => {
    if (authToken === null)
        return <Route path={path} element={<Navigate replace to="/" />} />;

    return (
        <Route path={path}>
            <Component/>
        </Route>
    );
};
