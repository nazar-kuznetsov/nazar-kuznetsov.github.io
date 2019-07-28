import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Nav } from './nav';
import { Rating } from '../../components/rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideBar from './sidebar';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const Description = lazy(() => import('./description'));
const Characteristic = lazy(() => import('./characteristic'));
const DetailsGallery = lazy(() => import('./details-gallery'));
const Feedback = lazy(() => import('./feedback'));

import { WithSidebar } from './sidebar';

const Container = (props) => {
    const { phone, match, home, location } = props;
    return (
        <>
            <div>
                <div className="details__topline">
                    <div>
                        <h1 className="phone-details__title">{phone.title}</h1>
                        <div className="rating">
                            <Rating rating={phone.feedback} size="lg" />
                            {phone.feedback?.length
                                && <Link to={`${match.url}/feedback`}>{phone.feedback.length} отзыв</Link>
                        }
                        </div>
                    </div>
                    <span className="details__code">Код: СК2ЦЦ-{phone ?.id}</span>
                </div>
                <Nav match={props.match} feedback={phone.feedback} />
                <div className={location.pathname !== home ? "details__wrapper" : ""}>
                    <div className="phone-details__content">
                        <Suspense fallback={<FontAwesomeIcon
                            size={'3x'}
                            className="fa-spin details__spinner"
                            color="#41B3FF"
                            icon={faSpinner}
                        />}>
                            <Switch>
                                <Route exact={true} path={props.match.url} render={(props) => <Description {...props} product={phone} />} />
                                <Route path={`${props.match.url}/characteristic`} render={(props) => <Characteristic {...props} product={phone} />} />
                                <Route path={`${props.match.url}/gallery`} render={(props) => <DetailsGallery {...props} product={phone} />} />
                                <Route path={`${props.match.url}/feedback`} render={(props) => <Feedback {...props} product={phone} />} />
                            </Switch>
                        </Suspense>
                    </div>
                    {location.pathname !== home ? <SideBar phone={phone} match={props.match} /> : null}
                </div>

            </div>
        </>
    )
}


export default Container;


