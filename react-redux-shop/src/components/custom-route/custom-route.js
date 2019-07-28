import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Header} from '../../modules/header';

const CustomRoute = React.memo(({component: Component, ...rest}) => {
    return (
        <>
            <Header />
            <Route {...rest} component={(props) => {return <Component {...props}/>}} />
        </>
    )
})

export default CustomRoute;