import React from 'react';
import {Navigate, Outlet, Route, useLocation} from "react-router-dom";
import {ModalAuth} from "./ModalAuth";

// компонент пишем с заглавной
export const AuthChecker = ({authToken, Component}) => {
    // if (authToken === null)
    //     return <Route path={path} element={<Navigate replace to="/"/>}/>;
    //
    // return (
    //     <Route path={path} element={ authToken === null ? <Navigate replace to="/" /> : <Component/> } />
    // );

    // if (authToken === null) return <Navigate replace to="/"/>

    // return authToken ? <Outlet /> : <Navigate to="/login" />;
    let location = useLocation();

    return authToken ? <Component /> : <Navigate to="/login" state={{ from: location }} />;
};
