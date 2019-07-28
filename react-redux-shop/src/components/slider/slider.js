import React from 'react';
import Slider from 'react-slick';
import {settings} from './settings';

class SimpleSlider extends React.Component {
  /* через props получаем дату
     и с помощью map выводим слайды
  */


  render() {
    return (
      <Slider {...settings}>
        {
          this.props.data.map(item => {
            return (
              <div key={item.id}>
                <img src={item.img} alt="" />
                <div className="slider-item">
                  <p>{item.desctiption}</p>
                </div>
              </div>
            );
          })
        }
      </Slider>
    );
  }
}

export default SimpleSlider;
