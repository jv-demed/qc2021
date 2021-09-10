import React from 'react';
import Box from '../../styles/components/Box';
import MatchListStyled from './MatchListStyled';
import getData from '../../getData';
import dataUpdate from '../../dataUpdate';

export default function MatchList(props){

    const seasons = getData('allSeasons', `
        allSeasons{
            id
            year
            rounds{
                id
                round
                matches{
                    id
                    flag
                    match
                    player1{
                        id
                        wins
                        winRate
                        killingSpree
                        ksRate
                        matches
                    }
                    player2{
                        id
                        wins
                        winRate
                        killingSpree
                        ksRate
                        matches
                    }
                    game1{
                        id
                        winner{
                            id
                        }
                    }
                    game2{
                        id
                        winner{
                            id
                        }
                    }
                }
            }
            players{
                id
            }
        }
    `);

    return(
        <Box>
            <MatchListStyled>
                <ul>
                    {seasons.map((season) => {
                        if(season.year == props.season){
                            return season.rounds.map((round) => {
                                return round.matches.map((match) => {
                                    dataUpdate('/api/matchUpdate', match);
                                    return(
                                        <li key={match.id}>{match.match}</li>
                                    )
                                })
                            })
                        }
                    })}
                </ul>
            </MatchListStyled>
        </Box>
    )

} 