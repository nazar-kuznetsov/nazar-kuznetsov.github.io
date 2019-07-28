import React, { Component } from 'react';
import { Rating } from '../../../components/rating';
import PrivatePage from '../../auth/private-page';


class Message extends Component {
    render() {
        return (
            <div>
                <p>Оставтьте свой отзыв</p>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Оптравить</button>
            </div>
        )
    }
}

const Conent = PrivatePage(Message);

class DetailsFeedback extends Component {
    render() {
        return (
            <div className="details-gallery">
                <h2 className="details__title">Отзывы <span>{this.props.product.title}</span></h2>
                <Conent />
                {
                    this.props.product ?.feedback ?.map(feedback => {
                        return (
                            <div key={feedback.id}>
                                <Rating rating={feedback.rating} size="1x" />
                                <h2>{feedback.name}</h2>
                                <p>{feedback.worth}</p>
                                <p>{feedback.experience_use}</p>
                                <p>{feedback.limitations}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default DetailsFeedback;