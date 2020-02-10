import React from 'react';

const Player = props => {
    return (
        <div className='player-div'>
            <h3>{props.player.name}</h3>
            <h4>{props.player.country}</h4>
            <h4>{props.player.searches} Search(es)</h4>
        </div>
    )
}

export default Player;