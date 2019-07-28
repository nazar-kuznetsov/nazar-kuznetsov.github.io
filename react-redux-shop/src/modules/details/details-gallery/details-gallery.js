import React, { Component } from 'react';
import './details-gallery.scss';

class DetailsGallery extends Component {

    render() {
        return (
            <div className="details-gallery">
                <h2 className="details__title">Фотографии <span>{this.props.product.title}</span></h2>
                <ul className="details-gallery__list">
                    {this.props.product.image.map(img => {
                        return (
                            <li className="details-gallery__item" key={img}>
                                <img className="details-gallery__photo" src={img} alt=""/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default DetailsGallery;