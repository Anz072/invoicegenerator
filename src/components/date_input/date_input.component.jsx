import React, { useState } from "react";
import "./date_input.styles.css"; // Import the CSS file

const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="datepicker-container">
      <input
        type="date"
        className="datepicker-input"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DateInput;
