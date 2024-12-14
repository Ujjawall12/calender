import React, { useState } from "react";
import "../styles/EventModal.css";

const EventModal = ({ isOpen, onClose, onSave, selectedDate, events }) => {
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if (!eventName || !startTime || !endTime) {
      alert("Please fill all required fields.");
      return;
    }
    onSave({ eventName, startTime, endTime, description });
    setEventName("");
    setStartTime("");
    setEndTime("");
    setDescription("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="event-modal">
      <div className="modal-content">
        <h2>Add Event for {selectedDate}</h2>
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="time"
          placeholder="Start Time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="time"
          placeholder="End Time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <textarea
          placeholder="Description (Optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EventModal;
