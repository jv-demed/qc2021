import React from 'react';
import getData from '../../getData';
import Box from '../../styles/components/Box';
import RankingStyled from './RankingStyled';

export default function Ranking(){

    const players = getData('allPlayers', `
        allPlayers{
            id
            nick
            score
            wins
            winRate
            killingSpree
            ksRate
            matches
        }
    `);
    //console.log(players)

    return(
        <Box>
            <RankingStyled>
                <tbody>
                    <tr>
                        <th/>
                        <th>Players</th>
                        <th>SC</th>
                        <th>W</th>
                        <th>%W</th>
                        <th>KS</th>
                        <th>%KS</th>
                        <th>MTS</th>
                    </tr>
                    {players.map((pl, i) => {
                        return(
                            <tr key={pl.id}>
                                <td className='info'>{i+1}</td>
                                <td>
                                    <a href={`/${pl.nick}`}>{pl.nick}</a>
                                </td>
                                <td className='info'>{pl.score}</td>
                                <td className='info'>{pl.wins}</td>
                                <td className='info'>{pl.winRate}%</td>
                                <td className='info'>{pl.killingSpree}</td>
                                <td className='info'>{pl.ksRate}%</td>
                                <td className='info'>{pl.matches}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </RankingStyled>
        </Box>
    )
}