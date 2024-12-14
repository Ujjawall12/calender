import React, { useState, useEffect } from "react";
import "../styles/Calendar.css";

const Calendar = ({ events, onDayClick }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDay = startOfMonth.getDay();

  const daysInMonth = [];
  for (let i = 1 - startDay; i <= endOfMonth.getDate(); i++) {
    daysInMonth.push(i > 0 ? i : "");
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>Previous</button>
        <h2>{currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}</h2>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="calendar-day-name">{day}</div>
        ))}
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${day === "" ? "empty" : ""}`}
            onClick={() => day && onDayClick(day)}
          >
            <span>{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
