import React from 'react';
import {Card} from '../card/card.component';

import './card-list.style.css';


// this component has to only think about what to add
// what to render
export const CardList = props => (
    <div className='card-list'>
    {props.monsters.map(monster =>(
        <Card key={monster.id} monster={monster} /> 
    ))} 
    </div>   
)