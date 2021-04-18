import React from 'react'
import DatePicker from 'react-datepicker';
import { useState } from "react";
 
import "react-datepicker/dist/react-datepicker.css";
function Date() {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div className='Date'>
            <DatePicker
            selected= {selectedDate}
            onChange = {date => setSelectedDate(date)}
            dateFormat ='dd/MM/yyyy'
            filterDate = {date => date.getDate() !== 6 && date.getDate() !== 0}
            isClearable
            scrollableMonthYearDropdown
            />
            
        </div>
    )
}

export default Date
