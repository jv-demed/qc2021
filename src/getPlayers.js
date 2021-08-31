import { useState, useEffect } from "react";

export default function getPlayers(){
    
    const [players, setPlayers] = useState([]);

    useEffect(() => {

        fetch('https://graphql.datocms.com/', {
            method: 'POST',
            headers: {
                'Authorization': 'df1743707db25f9d95a2bea5b58437',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 'query': `query{
                allPlayers{
                    id
                    nick
                }   
            }`})
        })
        .then((res) => res.json())
        .then((complete) => {
            const datoPlayers = complete.data.allPlayers;
            setPlayers(datoPlayers);
        })
    
    }, []);

    return players;
}