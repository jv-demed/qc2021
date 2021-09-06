import { SiteClient } from 'datocms-client';

export default async function DataUpdate(req){

    if(req.method === 'POST'){
        
        const client = new SiteClient('62280b631bd953932ae0583fc48d57');

        const match = req.body;
        const pl1 = match.player1;
        const pl2 = match.player2;
        
        await client.items.update(match.id, {
            flag: true
        })

        await client.items.update(pl1.id, {
            matches: Number(pl1.matches)+1
        })

        await client.items.update(pl2.id, {
            matches: Number(pl1.matches)+1
        })
    }
}