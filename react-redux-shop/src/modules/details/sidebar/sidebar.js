import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '../../../components/rating';
import './sidebar.scss';

export default ({ phone, match }) => {

    return (
        <aside className="sidebar-details">
            <div className="sidebar-details__rewie">
                <img src={phone.image[0]} alt="" />
                <div className="sidebar-details__title">
                    <h2>{phone.title}</h2>
                    <Rating rating={phone.feedback} size="lg" />
                    {phone.feedback ?.length
                        && <Link to={`${match.url}/feedback`}>{phone.feedback.length} отзыв</Link>
                        }
                </div>
            </div>
            <div></div>
            <span className="sidebar-details__price">{phone.price} грн</span>
            <button className="button-primary">Купить</button>
        </aside>
    )
}
