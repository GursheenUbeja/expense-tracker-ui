import React from 'react';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export  default function Jumbotron(){
    return(
        <div style={{textAlign : 'center'}}> 
          <Card  className="mb3"  
            style={{  width: '100%', height : '100%',backgroundColor: '#000' }}>
                <Card.Body>
                    <Card.Title style={{color:'white'}}>Expense Tracker</Card.Title>
                </Card.Body>
                <Card.Text style={{color:'white'}}>
                    Start tracking your expenses here!! Get Monthly Reports & More
                </Card.Text>
            </Card>
        </div>

    )
}

