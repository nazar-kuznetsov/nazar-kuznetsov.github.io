import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPhone} from './services/action';
import {addCompare, compareUpdateLocalStorage, deleteCompare} from '../compare/services/action';
import AbsoluteWrapper from '../../components/absolute-wrapper';
import {Sidebar} from '../sidebar';
import {Phones} from '../../components/phones';
import './style.scss';

class Home extends Component {

  componentDidMount() {
    this.props.fetchPhone();
  }

  addCompare = phone => {
    this.props.addCompare(phone);
    this.props.compareUpdateLocalStorage();
  }

  deleteCompare = id => {
    this.props.deleteCompare(id);
    this.props.compareUpdateLocalStorage();
  }

  addToCart = phone => {

  }

  deleteToCart = id => {

  }

  render() {
    return (
      <AbsoluteWrapper>
        <main className="home-page">
          <Sidebar />
          <Phones
            addCompare={this.addCompare}
            deleteCompare={this.deleteCompare}
            data={this.props.data}
          />
        </main>
      </AbsoluteWrapper>
    );
  }
}

const mapStateToProps = ({phoneReducer}) => {
  return {
    data: phoneReducer.phone
  };
};

const mapDispatchToProps = {
  fetchPhone,
  addCompare,
  compareUpdateLocalStorage,
  deleteCompare
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
