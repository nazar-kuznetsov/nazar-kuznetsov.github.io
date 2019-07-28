import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { loadLocalStorage } from '../../../modules/compare/services/action';
import './style.scss';

export class Phone extends React.PureComponent {
  state = {
    isCompare: false
  }

  toggleCompare = () => {
    this.setState(({ isCompare }) => {
      return {
        isCompare: !isCompare
      };
    }, () => {
      this.state.isCompare
        ? this.props.addCompare(this.props.phone)
        : this.props.deleteCompare(this.props.phone.id);
    });
  };

  componentDidMount() {
    const dataLocalStorage = loadLocalStorage() || [];
    const compare = dataLocalStorage.map(element => element.id);
    this.setState({ isCompare: compare.includes(this.props.phone.id) });
  }

  render() {
    const { phone, scrollToTop } = this.props;

    return (
      <div className="phone">
        <div className="phone__top">
        <span className="phone__code">Код: СК2ЦЦ - {phone.id}</span>
        <Link to={`phone/${phone.id}`} onClick={scrollToTop}>
          <div className="phone__img">
            <img src={phone.image[0]} alt="" />
          </div>
          <h2>{phone.title}</h2>
        </Link>
        </div>
        <div className="phone__content">
          <div>
            <span className="phone__price">{phone.price}</span>
            <span> грн</span>
          </div>
          <Link to={`phone/${phone.id}/feedback`} className="phone__feedback">Оставить отзыв</Link>
        </div>
        <div className="phone__action">
        <div className="phone__stock">
            {
              phone.stock
              ? <span className="success">Есть в наличии</span>
              : <span className="warning">Нет в наличии</span>
            }
          </div>
          <FontAwesomeIcon
            onClick={this.toggleCompare}
            icon={faBalanceScale}
            className="phone__icon"
            color={this.state.isCompare ? '#7eb105' : '#5C6875'}
          />

          <FontAwesomeIcon
            icon={faShoppingCart}
            color='#5C6875'
            className="phone__icon"
          />


        </div>
      </div>

    );
  }
}


