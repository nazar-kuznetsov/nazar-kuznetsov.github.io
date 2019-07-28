import React from 'react';


export const generator = (data) => {
    const result = [];
    for (let key in data) {
        for (let i in data[key]) {
            if (Array.isArray(data[key][i])) {
                result.push(
                    <div className="details-characteristic__item" key={`${key}-${i}`}>
                        <span className="details-characteristic__info">{data[key][i][0]}</span>
                        <span className="details-characteristic__value">{data[key][i][1]}</span>
                    </div>
                )
            } else {
                result.push(<h2 className="details-characteristic__title" key={`${key}-${i}`}>{data[key][i]}</h2>)
            }
        }
    }
    return result;
}
