import React from 'react';
import getPlayers from '../../getData';
import Box from '../../styles/components/Box';
import RankingStyled from './RankingStyled';

export default function Ranking(){

    const players = getPlayers('allPlayers', `
        allPlayers{
            id
            nick
            matchs
        }
    `);
    console.log(players)

    return(
        <Box>
            <RankingStyled>
                <tbody>
                    <tr>
                        <th/>
                        <th>Players</th>
                        <th>QR</th>
                        <th>Matchs</th>
                        <th>Wins</th>
                        <th>%W</th>
                    </tr>
                    {players.map((pl) => {
                        return(
                            <tr key={pl.id}>
                                <td className='info'>12</td>
                                <td>{pl.nick}</td>
                                <td className='info'>{pl.matchs}</td>
                                <td className='info'>{pl.matchs}</td>
                                <td className='info'>{pl.matchs}</td>
                                <td className='info'>{pl.matchs}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </RankingStyled>
        </Box>
    )
}