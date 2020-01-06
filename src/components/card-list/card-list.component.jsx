import './card-list.styles.css';

import Card from '../card/card.component';
import React from 'react';

const CardList = (props) => {
    return <div className='card-list'>{
        props.unicorns.map(unicorn => <Card key={unicorn.id} unicorn={unicorn}/>)
      }</div>;
};

export default CardList;