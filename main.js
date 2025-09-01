document.addEventListener('DOMContentLoaded', () => {
    const buyBtn = document.getElementById('buyTicketsBtn');
    const rentalBtn = document.getElementById('bookRentalBtn');
  
    if (buyBtn) {
      buyBtn.addEventListener('click', () => {
        // Switch to tickets page
        showPage('ticketsPage');
      });
    }
  
    if (rentalBtn) {
      rentalBtn.addEventListener('click', () => {
        // Switch to rental page
        showPage('rentalPage');
      });
    }
  });
  