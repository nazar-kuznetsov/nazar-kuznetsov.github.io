import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from './actions';
import {withRouter} from 'react-router-dom';

export default PrivatePage => {
  class Authentication extends Component {
    componentWillMount() {
      this.props.fetchUser();
      if (this.props.authenticated === null) {
        this.props.history.push({
          pathname: '/login',
          state: {from: this.props.location.pathname}
        });
      }
    }

    componentWillUpdate(nextProps) {

      if (!nextProps.authenticated) {
        this.props.history.push({
          pathname: '/login',
          state: {from: this.props.location}
        });
      }
    }

    render() {
      if (this.props.authenticated) {
        return <PrivatePage {...this.props}/>;
      }

      return null;
    }
  }


  const mapStateToProps = state => ({
    authenticated: state.auth
  });

  return connect(mapStateToProps, {fetchUser})(withRouter(Authentication));
};
