import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import './rating.scss';



export const Rating = React.memo(({ rating = [], size }) => {

    const averageRating = data => {
        if (data.length === 0) {
            return 0;
        } else if (Number.isInteger(data)) {
            return data;
        }

        const total = data.reduce((total, element) => {
            if (element.rating >= 1) {
                total.quantity += 1;
                total.summa += element.rating;
                return total;
            }
            return total;
        }, {quantity: 0, summa: 0});

        return total.summa / total.quantity;
    }

    const numRound = (num) => {
        if (num === 0) return 0;
        const d = Math.floor(num)
        ,i = num % d;
        return i < .25 ? d : (i < .75 ? d + .5 : d + 1);
    }


    const generateStart = () => {
        const average = numRound(averageRating(rating));

        const html = [];

        for (let i = 0; i < average; i++) {
            if (i + 0.5 === average) {
                html.push(
                    <FontAwesomeIcon
                        key={i}
                        size={size}
                        color="#FFC107"
                        icon={faStarHalfAlt}
                    />
                )
            } else {
                html.push(
                    <FontAwesomeIcon
                        key={i}
                        size={size}
                        color="#FFC107"
                        icon={faStar}
                    />
                )
            }
        }

        for (let i = html.length; i < 5; i++) {
            html.push(
                <FontAwesomeIcon
                    key={i}
                    size={size}
                    color="#dddddd"
                    icon={faStar}
                />)
        }

        return html;
    }

    return (
        <div>
            {generateStart()}
        </div>
    );
});
