import React from 'react';
import Box from '../../styles/components/Box';
import MatchListStyled from './MatchListStyled';
import getData from '../../getData';

export default function MatchList(props){

    const matches = getData('allMatches', `
        allMatches{
            id
            match
            season
        }
    `)

    return(
        <Box>
            <MatchListStyled>
                <ul>
                    {matches.map((match) => {
                        if(match.season == props.season){
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