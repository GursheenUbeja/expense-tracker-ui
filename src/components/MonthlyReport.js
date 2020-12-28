import React , {useState, useEffect} from 'react';
import Chart from "react-google-charts";
import Jumbotron  from  './Jumbotron'
import {  Button } from  'react-bootstrap';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function MonthlyReport(){
    const [data, setData] = useState('');
    const history = useHistory();
    const callTrackerComponent = () => history.push('/');
    

    useEffect(()=>{
        async function fetchData(){
            const res = await fetch('http://localhost:8080/expenditureDistributionService/getDistributionData');
            res.json()
            .then(res=>setData(res))
            .catch(err=>console.log(err));
        }
        fetchData();
    }, [])

    return (
        <>
        <Jumbotron />

        <Button variant="light"
                        style={{margin: '10px'}}
                        onClick={callTrackerComponent}
                        >Back</Button>

        <Chart
        style={{marginTop:'100px', marginLeft:'250px'}}
        width={'500px'}
        height={'300px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
        title: 'Expense Tracker',
        chartArea: { width: '50%' },
        colors: ['#28a745'],
        hAxis: {
            title: 'Expenses',
            minValue: 0,
        },
        vAxis: {
            title: 'Months',
        },
  }}
/>
        </>
    )

}

export default MonthlyReport;