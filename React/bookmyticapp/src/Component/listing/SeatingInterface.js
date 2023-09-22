import React, { useState } from "react";

const SeatingInterface = () => {
  // Define a state to manage selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Function to handle seat selection
  const handleSeatSelect = (row, seat) => {
    const newSeat = `${row}-${seat}`;
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(newSeat)) {
        // If the seat is already selected, remove it
        return prevSelectedSeats.filter((s) => s !== newSeat);
      } else {
        // Otherwise, add it to the selected seats
        return [...prevSelectedSeats, newSeat];
      }
    });
  };

  // Function to render the seating layout
  const renderSeats = () => {
    // Replace this with your theater's seating layout data
    const rows = ["A", "B", "C"];
    const seatsPerRow = 10;

    return rows.map((row) => (
      <div key={row} className="row">
        {Array.from({ length: seatsPerRow }, (_, index) => (
          <div
            key={index}
            className={`seat ${selectedSeats.includes(`${row}-${index + 1}`) ? "selected" : ""}`}
            onClick={() => handleSeatSelect(row, index + 1)}
          >
            {`${row}-${index + 1}`}
          </div>
        ))}
      </div>
    ));
  };

  // Function to handle the booking process
  const handleBooking = () => {
    // Implement your booking logic here
    console.log("Selected seats:", selectedSeats);
    // Send the selected seats to your backend for booking
  };

  return (
    <div>
      <h2>Seating Interface</h2>
      <div className="seating-layout">{renderSeats()}</div>
      <button onClick={handleBooking}>Book Tickets</button>
    </div>
  );
};

export default SeatingInterface;
