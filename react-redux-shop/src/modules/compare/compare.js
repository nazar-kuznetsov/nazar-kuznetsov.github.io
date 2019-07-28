import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  clearLocalStorage,
  clearCompare,
  deleteCompare,
  compareUpdateLocalStorage
} from './services/action';

import {Mobile} from './mobile';
import AbsoluteWrapper from '../../components/absolute-wrapper';

class Compare extends Component {

  clearCompare = () => {
    this.props.clearCompare();
    clearLocalStorage();
  }

  deleteCompare = id => {
    this.props.deleteCompare(id);
    this.props.compareUpdateLocalStorage();
  }

  render() {
    return (
      <AbsoluteWrapper>
        <h1>Сравнение товаров</h1>
        <button onClick={this.clearCompare}>Очистить список</button>
        {
          this.props.compare.map(product => {
            return (
              <Mobile
                key={product.id}
                product={product}
                deleteCompare={this.deleteCompare}
              />
            );
          })
        }
      </AbsoluteWrapper>
    );
  }
}

const mapStateToProps = ({compareReducer}) => {
  return {
    compare: compareReducer.compare
  };
};

const mapDispatchToProps = {
  clearCompare,
  deleteCompare,
  compareUpdateLocalStorage
};


export default connect(mapStateToProps, mapDispatchToProps)(Compare);
