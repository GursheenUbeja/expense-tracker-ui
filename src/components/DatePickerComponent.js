import React from 'react'  
import DatePicker from "react-datepicker";  
  
import "react-datepicker/dist/react-datepicker.css";  

const DatePickerComponent = ({date , setDate}) =>{  
        return (  
                <div className="container"
                        style={{marginLeft: '-15px'}}>  
                        <DatePicker 
                        dateFormat="MM/dd/yyyy"
                        style={{ float:'left'}}
                        showPopperArrow={false}  
                        placeholderText="Select Date" 
                        selected={date} onChange={date => setDate(date)} />
                </div>  
        )  
}  
  
export default DatePickerComponent 