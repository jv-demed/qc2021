import React from 'react';
import Page from '../src/styles/components/Page';
import GeralRanking from '../src/components/Ranking/GeralRanking';
import MatchList from '../src/components/MatchList/MatchList';

export default function Season2020(){
    return(
        <Page>
            <GeralRanking />
            <MatchList season='Season 1 / 2020' />
        </Page>
    )
}