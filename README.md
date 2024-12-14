Calender TODO



# Dynamic Event Calendar Application

A fully functional **Dynamic Event Calendar Application** built with **React.js** and **Vite**. The app allows users to manage events, navigate between months, and provides a clean, modern UI for an excellent user experience.

---

## Features

### Core Features
1. **Calendar View**:
   - Displays a grid-based calendar for the current month.
   - Allows navigation between months using "Previous" and "Next" buttons.
   - Highlights the current day and selected day.

2. **Event Management**:
   - Add events by clicking on a day.
   - Edit or delete existing events.
   - Each event includes:
     - Event Name
     - Start Time and End Time
     - Optional Description

3. **Event List**:
   - Displays a list of events for a selected day in a modal.

4. **Data Persistence**:
   - Saves events to **localStorage**, ensuring they persist between browser sessions.

---

### Advanced Features
1. **Conflict Management**:
   - Prevents overlapping events (e.g., two events at the same time).

2. **Event Filtering**:
   - Allows users to filter events by keywords.

3. **Event Counts**:
   - Displays the number of events as badges on each calendar day.

4. **Responsive Design**:
   - Fully optimized for both desktop and mobile devices.

5. **Modern UI**:
   - Styled with a clean, user-friendly design.

6. **Optional Enhancements**:
   - Drag-and-drop functionality for rescheduling events.
   - Export events as JSON or CSV.

---

## Technologies Used
- **React.js**: For building UI components.
- **Vite**: For fast development and optimized builds.
- **LocalStorage**: For persisting data.
- **CSS**: For custom styling.

---

## Installation and Setup

1. **Prerequisites**:
   - Install [Node.js](https://nodejs.org/) (latest LTS version recommended).

2. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
