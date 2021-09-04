import React from 'react';
import getData from '../../getData';
import Box from '../../styles/components/Box';
import RankingStyled from './RankingStyled';

export default function Ranking(){

    const players = getData('allPlayers', `
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
                                <td>
                                    <a href={`/${pl.nick}`}>{pl.nick}</a>
                                </td>
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