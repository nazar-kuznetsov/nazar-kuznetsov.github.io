import React from 'react';
import Slider from 'react-slick';
import {loadLocalStorage} from '../../compare/services/action';
import Icon1 from '../../../assets/img/icon/ic_core_laptop1.svg';
import Icon2 from '../../../assets/img/icon/ic_camera_1_24px.svg';
import Icon3 from '../../../assets/img/icon/ic_cpu_24px.svg';
import Icon4 from '../../../assets/img/icon/ic_diagonal_mob_24px.svg';
import Icon5 from '../../../assets/img/icon/ic_ram_24px.svg';
import Icon6 from '../../../assets/img/icon/ic_selfie_24px.svg';
import './style.scss';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1
};


export class Phone extends React.PureComponent {
  state = {
    isCompare: false
  }

  toggleCompare = () => {
    this.setState(({isCompare}) => {
      return {isCompare: !isCompare};
    }, () => {
      this.state.isCompare
        ? this.props.addCompare(this.props.phone)
        : this.props.deleteCompare(this.props.phone.id);
    });
  }

  componentDidMount() {
    const dataLocalStorage = loadLocalStorage() || [];
    const compare = dataLocalStorage.map(element => element.id);
    this.setState({isCompare: compare.includes(this.props.phone.id)});
  }

  render() {
    const {
      image,
      price,
      display,
      description,
      camera,
      front_camera,
      cpu,
      core,
      ram
    } = this.props.phone;

    settings.customPaging = i => <img src={image[i]} alt="dots" />;

    return (
      <div className="phone-details">

        <div className="phone-details__content">
          <div className="flex">

            <div className="col-6">
              <Slider {...settings}>
                {image.map(url => {
                  return (
                    <div key={url}>
                      <img src={url} alt="" />
                    </div>
                  );
                })}
              </Slider>

            </div>
            <div className="col-6">
              <p className="phone-details__price">{price}   грн</p>
              <button className="button-primary">Купить</button>
              <ul className="flex phone-details__list">
                <li className="col-4">
                  <div className="phone-details__icon">
                    <img src={Icon4} alt="" />
                  </div>
                  <div className="phone-details__info">
                    <span>Размер экрана</span>
                    <span>{display}</span>
                  </div>
                </li>
                <li className="col-4">
                  <div className="phone-details__icon">
                    <img src={Icon2} alt="" />
                  </div>
                  <div className="phone-details__info">
                    <span>Основная камера, Мп</span>
                    <span>{camera}</span>
                  </div>
                </li>
                <li className="col-4">
                  <div className="phone-details__icon">
                    <img src={Icon6} alt="" />
                  </div>
                  <div className="phone-details__info">
                    <span>Фронтальная камера, Мп</span>
                    <span>{front_camera}</span>
                  </div>
                </li>
                <li className="col-4">
                  <div className="phone-details__icon">
                    <img src={Icon3} alt="" />
                  </div>
                  <div className="phone-details__info">
                    <span>Процессор</span>
                    <span>{cpu}</span>
                  </div>
                </li>
                <li className="col-4">
                  <div className="phone-details__icon">
                    <img src={Icon1} alt="" />
                  </div>
                  <div className="phone-details__info">
                    <span>Количество ядер</span>
                    <span>{core}</span>
                  </div>
                </li>
                <li className="col-4">
                  <div className="phone-details__icon">
                    <img src={Icon5} alt="" />
                  </div>
                  <div className="phone-details__info">
                    <span>Объем оперативной памяти</span>
                    <span>{ram}</span>
                  </div>
                </li>
              </ul>
              <div className="add-favorites">
                <button onClick={this.toggleCompare}>
                  {
                    this.state.isCompare
                      ? 'Удалить из сравение'
                      : 'Добавить в сравнение'
                  }
                </button>
              </div>
              <div>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


