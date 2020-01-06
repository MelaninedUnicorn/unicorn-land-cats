import './card.styles.css';

import React from 'react';

const Card = ({unicorn,...props}) => {
    return  (
        <div className='card-container'>
        <img alt='unicorn' src={`https://robohash.org/${unicorn.id}?set=set4&bgset=&size=180x180`} />
        <h2>{unicorn.name}</h2>
        <p>{unicorn.email}</p>
        </div>
        );
};

export default Card;