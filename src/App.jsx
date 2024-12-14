import React, { useState } from "react";
import Calendar from "./components/Calendar";
import EventModal from "./components/EventModal";

function App() {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleDayClick = (day) => {
    setSelectedDate(day);
    setIsModalOpen(true);
  };

  const handleSaveEvent = (event) => {
    setEvents([...events, { ...event, date: selectedDate }]);
  };

  return (
    <div className="app">
      <h1>Dynamic Event Calendar</h1>
      <Calendar events={events} onDayClick={handleDayClick} />
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveEvent}
        selectedDate={selectedDate}
        events={events}
      />
    </div>
  );
}

export default App;
