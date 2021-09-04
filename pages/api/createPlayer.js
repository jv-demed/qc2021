import { SiteClient } from 'datocms-client';
import getData from '../../src/getData';

export default async function CreatePlayer(req, res){

    const client = new SiteClient('62280b631bd953932ae0583fc48d57');

    client.items.find(54578281, {
        nested: 'true',
        version: 'published'
      })
      .then((item) => {
        console.log(item);
      })
      .catch((error) => {
        console.error(error);
      });
    
    // const data = await client.items.update(itemid, {
    //     title: "[EDIT] My first blog post!",
    // })
    // .then((item) => {
    //     console.log(item);
    // })
}