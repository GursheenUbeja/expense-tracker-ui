import React, {useEffect, useState} from 'react';

function PingComponent (){
    const [data, setData] = useState('');

    useEffect(()=>{
        async function fetchPingData(){
            const res = await (await fetch('http://localhost:8080/pingService/ping'));
            res.json()
            .then(res=>setData(res))
            .catch(err=>console.log(err));
        }
        fetchPingData();
    }, [])
    return <h1>{JSON.stringify(data.Ping)}</h1>;
}


export default PingComponent;