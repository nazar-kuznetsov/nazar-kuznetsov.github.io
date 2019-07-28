import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { detailsFetch, feedbackFetch } from './services/action';
import AbsoluteWrapper from '../../components/absolute-wrapper';



import './details.scss';

const Container = lazy(() => import('./container'));


const NotFound = () => <div>Товар не найден</div>;

class Details extends Component {
    state = {
        phone: null
    }

    componentDidMount() {
        this.props.detailsFetch(this.props.match.params.id, this.initState);
    }

    initState = phone => {
        this.setState({ phone });
    }

    initFeedback = feedback => {
        this.setState({ feedback });
    }

    render() {
        const { match } = this.props;
        const { phone } = this.state;
        return (
            <AbsoluteWrapper>
                {
                    phone
                        ? <section className="details-section">
                            <div className="phone-details">
                                <Suspense fallback={null}>
                                    <Switch>
                                        <Route path={`(${match.url}|${match.url}/characteristic|${match.url}/gallery|${match.url}/feedback)`} render={(props) => <Container {...props} match={match} phone={phone} home={match.url} />} />
                                        <Route component={NotFound} />
                                    </Switch>
                                </Suspense>
                            </div>

                        </section>
                        : null
                }
            </AbsoluteWrapper>
        );
    }
}

const mapDispatchToProps = {
    detailsFetch,
    feedbackFetch
};

export default connect(null, mapDispatchToProps)(Details);
