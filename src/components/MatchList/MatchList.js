import React from 'react';
import Box from '../../styles/components/Box';
import MatchListStyled from './MatchListStyled';
import getData from '../../getData';
import dataUpdate from '../../dataUpdate';

export default function MatchList(props){

    const matches = getData('allMatches', `
        allMatches{
            flag
            id
            match
            season
            player1{
                id
                matches
            }
            player2{
                id
                matches
            }
        }
    `)
    //console.log(matches);

    return(
        <Box>
            <MatchListStyled>
                <ul>
                    {matches.map((match) => {
                        if(match.season == props.season){
                            if(!match.flag){
                                dataUpdate('/api/matchUpdate', match);
                            }
                            return(
                                <li key={match.id}>{match.match}</li>
                            )
                        }
                    })}
                </ul>
            </MatchListStyled>
        </Box>
    )

} 