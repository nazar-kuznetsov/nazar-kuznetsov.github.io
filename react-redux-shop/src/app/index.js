import React, {lazy, Suspense, useContext} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, __RouterContext} from 'react-router-dom';
import {useTransition, animated, config} from 'react-spring';
import {Header} from '../modules/header';
import {signIn, signOut} from '../modules/auth/services/action';
import 'reset-css';
import './main.scss';

const Home = lazy(() => import('../modules/home'));
import Details from '../modules/details';

const Cart = lazy(() => import('../modules/cart'));
const Compare = lazy(() => import('../modules/compare'));
const NotFound = lazy(() => import('../modules/404'));


const App = props => {
    const {location} = useContext(__RouterContext);
    const currentKey = location.pathname.split('/')[1] || '/';
    const transtitions = useTransition(location, location => currentKey, {
        initial: {transform: 'translate(0%, 0px)'},
        // config: config.stiff,
        from: {opacity: 0, transform: 'translate(0, 50px)'},
        enter: {opacity: 1, transform: 'translate(0, 0px)'},
        leave: {opacity: 0, transform: 'translate(0, 50px)'}
    });


    return (
        <>
            {/* <button onClick={props.signIn}>Войти</button>
        <button onClick={props.signOut}>Выйти</button> */}
            <Header />
            <Suspense fallback={null}>
                {transtitions.map(({item, props, key}) => (
                    <animated.div key={key} style={props}>
                        <Switch location={item}>
                            <Route exact={true} path="/" component={Home} />
                            <Route exact={true} path="/cart" component={Cart} />
                            <Route exact={true} path="/compare" component={Compare} />
                            <Route path="/phone/:id" component={Details} />
                            <Route component={NotFound} />
                        </Switch>
                    </animated.div>
                ))}
            </Suspense>

        </>
    );

};

const mapStateToProps = state => {
    return {
        authenticated: state.authReducer
    };
};

const mapDispatchToProps = {
    signIn,
    signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
