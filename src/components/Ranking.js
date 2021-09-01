import React from 'react';
import getPlayers from '../getData';

export default function Ranking(){

    const players = getPlayers('allPlayers', `
        allPlayers{
            id
            nick
        }
    `);
    console.log(players)

    return(
        <div>
            <ul>
                {players.map((item) => {
                return(
                    <li key={item.id}>
                    <span>{item.nick}</span>
                    </li>
                )
                })}
        </ul>
        </div>
    )
}