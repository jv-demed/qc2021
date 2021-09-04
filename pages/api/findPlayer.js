import { SiteClient } from 'datocms-client';

export default async function findPlayer(match){

    const client = new SiteClient('62280b631bd953932ae0583fc48d57');
    const player1 = match.player1;
    console.log(player1);

    const player = await client.items.find(player1.id, {
        nested: 'true',
        version: 'published'
    })
    .then((item) => item)
    .catch((error) => {
        console.error(error);
    });

    return player;

}