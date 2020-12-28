import React , {useState} from 'react';
import {  Alert  ,Container, Row , Col, DropdownButton , Dropdown ,Button } from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from './Jumbotron.js'
import ChartRouter from  './ChartRouter';
import DatePickerComponent from './DatePickerComponent';
import moment from 'moment';
import { useHistory } from 'react-router-dom';


function TrackerComponent(){
    const [amount, setAmount] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [category, setCategory] = useState('Select Category');
    const [date, setDate] = useState(new Date()); 
    const [showForm, setShowForm] = useState(true); 

    const history = useHistory();
    const addMoreTransaction = () =>{
        history.push('/');
        setShowForm(true);
    } 
    
    function addTransaction(){
        const formattedDate = moment(date).format("DD-MMM-yyyy");
        const req = {
            method : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'title':title , 
            'amount':amount , 'description':desc, 
            'category':category , 'prurchaseDate':formattedDate })
        }
        const res = fetch('http://localhost:8080/addTransactionService/addTransaction' , req);
        if(res!==undefined && res!==null){
            console.log("Sucess");
                setShowForm(false)

        }
    }


    return(
        <>
            <Jumbotron />
            <Container style={{  width: '100%', height : '100%',backgroundColor: '#000' }}>
                <Row >
            <div style = {{marginTop: '70px' , backgroundColor: '#000'}}> </div>
                </Row>
            </Container>
            <Container 
                style={{ 
                    display : showForm ? 'block' : 'none',
                    width: '100%', height : '100%',backgroundColor: '#000' }}>
                <Row >
                    <Col></Col>
                    <Col></Col>
                    <Col style={{color:'white'}}></Col>
                </Row>
                <Row >
                    <Col></Col>
                    <Col></Col>
                    <Col style={{color:'white'}}></Col>
                </Row>
                <Row >
                    <Col></Col>
                    <Col></Col>
                    <Col style={{color:'white'}}></Col>
                </Row>
                <Row >
                    <Col></Col>
                    <Col></Col>
                    <Col style={{color:'white'}}></Col>
                </Row>
                <Row style={{margin:'20px'}}>
                    <Col style={{color:'white'}}>
                        Expense Amount:</Col>
                        <label htmlFor="expenseAmount"></label>
                    <Col style={{color:'white'}}>
                        <input type="text" id="expenseAmount" className="form-control"
                            style={{height:'70%'}} 
                            onChange={e=>setAmount(e.target.value)}/>
                    </Col>
                    <Col ></Col>
                </Row>

                <Row style={{margin:'20px'}}>
                    <Col style={{color:'white'}}>
                        Title:</Col>
                        <label htmlFor="expenseAmount"></label>
                    <Col style={{color:'white'}}>
                        <input type="text" id="expenseAmount" className="form-control"
                            style={{height:'70%'}} 
                            onChange={e=>setTitle(e.target.value)}/>
                    </Col>
                    <Col ></Col>
                </Row>


                <Row style={{margin:'20px'}}>
                    <Col style={{color:'white'}}>Category</Col>
                    <Col style={{color:'white'}}>
                        <DropdownButton 
                        
                            size='sm' id="dropdown-light-button" 
                            style={{ float:'left' }}
                            title={category}>
                            <Dropdown.Item onClick={e=>setCategory('Food')}>Food</Dropdown.Item>
                            <Dropdown.Item onClick={e=>setCategory('Rent')}>Rent/ Mortgage</Dropdown.Item>
                            <Dropdown.Item onClick={e=>setCategory('Entertainment')}>Entertainment</Dropdown.Item>
                            <Dropdown.Item onClick={e=>setCategory('Transport')}>Transport</Dropdown.Item>
                            <Dropdown.Item onClick={e=>setCategory('Insurance')}>Insurance</Dropdown.Item>
                            <Dropdown.Item onClick={e=>setCategory('Medical')}>Medical</Dropdown.Item>
                            <Dropdown.Item onClick={e=>setCategory('Savings')}>Savings</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col style={{color:'white'}}></Col>
                </Row>
                <Row style={{margin:'20px'}} >
                    <Col style={{color:'white'}}>Date</Col>
                    <Col style={{color:'white' , float:'left'}}><DatePickerComponent date = {date} setDate={setDate}/></Col>
                    <Col style={{color:'white'}}></Col>
                </Row>
                <Row style={{margin:'20px'}}>
                    <Col style={{color:'white'}}>Description</Col>
                    <Col style={{color:'white'}}>
                    <input type="text" id="expenseDesc" className="form-control"
                            style={{height:'70%'}} 
                            onChange={e=>setDesc(e.target.value)}/>

                    </Col>
                    <Col style={{color:'white'}}></Col>
                </Row>
                <div style = {{marginTop: '50px' ,
                
                backgroundColor: '#000'}}> </div>
                <Button
                style ={{ marginLeft : '10px',}}
                onClick={addTransaction}
                variant="light">Add Transaction</Button>
            </Container>
              <Alert style ={{
                    marginLeft: '110px',
                    marginRight: '110px',
                    marginBottom: '0px',
                    display : showForm ? 'none' : 'block'}}
                    variant="success">
                <Alert.Heading>Transaction added</Alert.Heading>
               
                <Button variant="light"
                        style={{margin: '10px'}}
                        onClick={addMoreTransaction}
                        >Add More Transaction</Button> </Alert>
        
        
            <Container style={{  width: '100%', height : '100%',backgroundColor: '#000' }}>
                <Row >
                <div style = {{marginTop: '30px' , backgroundColor: '#000'}}> </div>
               
                 </Row>

                <ChartRouter />
            </Container>
            <Container>
            <div style = {{ height: '100%' , width: '100%' ,backgroundColor: '#000'}}> </div>
              
            </Container>
        </>

    );
}

export default TrackerComponent;