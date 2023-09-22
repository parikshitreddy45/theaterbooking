// const seats = document.querySelectorAll('.seat');
// const bookButton = document.getElementById('book-button');
// const totalPriceDisplay = document.getElementById('total-price');
// const dateInput = document.getElementById('date');
// const timeInput = document.getElementById('time');

// let selectedSeats = [];
// let totalPrice = 0;

// // Event listener for seat selection
// seats.forEach((seat, index) => {
//     seat.addEventListener('click', () => {
//         if (!seat.classList.contains('booked')) {
//             seat.classList.toggle('selected');
//             updateSelectedSeats();
//         }
//     });
// });

// // Update selected seats and total price
// function updateSelectedSeats() {
//     selectedSeats = [...document.querySelectorAll('.seat.selected')];
//     totalPrice = selectedSeats.length * 10; // Replace with your pricing logic
//     totalPriceDisplay.textContent = `Total Price: $${totalPrice}`;
// }

// // Event listener for booking tickets
// bookButton.addEventListener('click', () => {
//     if (selectedSeats.length === 0) {
//         alert('Please select at least one seat.');
//     } else {
//         const selectedSeatNumbers = selectedSeats.map((seat) => seat.textContent);
//         alert(`Booked seats: ${selectedSeatNumbers.join(', ')}\nTotal Price: $${totalPrice}\nDate: ${dateInput.value}\nTime: ${timeInput.value}`);
//         // You can send the booking data to your server here
//     }
// });
