import './card.styles.css';

import React from 'react';

const Card = ({unicorn,...props}) => {
    return  (
        <div className='card-container'>
        <img alt='unicorn' src={`https://robohash.org/${unicorn.id}?set=set4&bgset=&size=150x150`} />
        <h2>{unicorn.name}</h2>
        
        </div>
        );
};

export default Card;