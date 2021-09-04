import { SiteClient } from 'datocms-client';

export default async function DataUpdate(req, res){
    const client = new SiteClient('TOKEN');
    
    const data = await client.items.update(itemid, {
        title: "[EDIT] My first blog post!",
    })
    .then((item) => {
        console.log(item);
    })
}