import { SiteClient } from 'datocms-client';

export default async function DataUpdate(req){

    if(req.method === 'POST'){
        
        const client = new SiteClient('62280b631bd953932ae0583fc48d57');

        const match = req.body;
        const player1 = match.player1;
        const player2 = match.player2;
        const game1 = match.game1;
        const game2 = match.game1;
        
        if(!match.flag){
            await client.items.update(match.id, {
                flag: true
            })
            await client.items.update(player1.id, {
                matches: addMatches(player1),
                wins: addWins(game1, game2, player1),
                killingSpree: addKs(game1, game2, player1),
            })
            await client.items.update(player2.id, {
                matches: addMatches(player2),
                wins: addWins(game1, game2, player2),
                killingSpree: addKs(game1, game2, player2),
            })
            console.log('Dados foram atualizados!');
        }

        await client.items.update(player1.id, {
            winRate: getWinRate(player1),
            ksRate: getKsRate(player1),
        })

        await client.items.update(player2.id, {
            winRate: getWinRate(player2),
            ksRate: getKsRate(player2),
        })

    }
}

function addMatches(player){
    return (player.matches + 2);
}

function addWins(game1, game2, player){
    let wins = 0;
    if(game1.winner.id == player.id){
        wins++;
    }if(game2.winner.id == player.id){
        wins++;
    }
    return (player.wins + wins);
}

function addKs(game1, game2, player){
    if(game1.winner.id == game2.winner.id && 
    game1.winner.id == player.id){
        return (player.killingSpree + 1);
    }else{
        return player.killingSpree;
    }
}

function getWinRate(player){
    return (player.wins / player.matches)*100;
}

function getKsRate(player){
    return (player.killingSpree / (player.matches / 2))*100;
}