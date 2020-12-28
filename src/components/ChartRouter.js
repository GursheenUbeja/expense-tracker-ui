import React from 'react';
import {  Button } from  'react-bootstrap';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ChartRouter(){
    const history = useHistory();
    const callExpenseDistribution = () => history.push('/expenseDistribution');
    const callMonthlyReport = () => history.push('/monthlyReport');

    return(
        <>
                    <Button variant="light"
                        style={{margin: '10px'}}
                        onClick={callExpenseDistribution}
                        >Expense Distribution</Button>
                    <Button variant="light"
                        style={{margin: '10px'}}
                        onClick={callMonthlyReport}
                        >Monthly Report</Button>
        </>
    )

}

export default ChartRouter;