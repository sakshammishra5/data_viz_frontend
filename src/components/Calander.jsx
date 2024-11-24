import React, { useState, useRef, useEffect, useContext } from 'react';
import Calendar from 'react-calendar';
import '../styles/DateRangePicker.css';
import { AppContext } from '../context/AppContext';


const DateRangePicker = () => {
  const {dateRange,setDateRange}=useContext(AppContext)
  const [isOpen, setIsOpen] = useState(false);
  const calendarRef = useRef(null);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'numeric',
      year: 'numeric',
    });
  };

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (value) => {
    setDateRange(value);
    setIsOpen(false);
  };

  return (
    <div className="date-range-container">
      <div className="input-container" onClick={() => setIsOpen(true)}>
        <input
          type="text"
          readOnly
          value={dateRange?.[0] && dateRange?.[1] 
            ? `${formatDate(dateRange[0])} - ${formatDate(dateRange[1])}`
            : 'Select date range'
          }
          className="date-input"
        />
        <svg 
          className="calendar-icon" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      </div>
      
      {isOpen && (
        <div className="calendar-popup" ref={calendarRef}>
          <Calendar
            selectRange={true}
            value={dateRange}
            onChange={handleSelect}
            className="calendar"
            minDetail="month"
            prev2Label={null}
            next2Label={null}
            showNeighboringMonth={false}
          />
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;