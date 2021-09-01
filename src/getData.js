import { useState, useEffect } from 'react';

export default function getData(prop, query){
    
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://graphql.datocms.com/', {
            method: 'POST',
            headers: {
                'Authorization': 'df1743707db25f9d95a2bea5b58437',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 'query': `query{${query}}`})
        })
        .then((res) => res.json())
        .then((complete) => {
            setData(complete.data[prop]);
        })
    
    }, []);

    return data;
}