import React from 'react';

import Player from './Player';

const Cards = props => {
    return(
        <div className="cards-div">
            {props.playerData.map(item => (
                <Player key={item.id} player={item} />
            ))}
        </div>
    )
}

export default Cards;