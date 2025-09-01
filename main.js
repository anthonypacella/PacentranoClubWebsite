document.addEventListener('DOMContentLoaded', () => {
    const buyBtn = document.getElementById('buyTicketsBtn');
    const rentalBtn = document.getElementById('bookRentalBtn');
  
    if (buyBtn) {
      buyBtn.addEventListener('click', () => {
        document.getElementById('tickets').scrollIntoView({ behavior: 'smooth' });
        showPage('ticketsPage');
      });
    }
  
    if (rentalBtn) {
      rentalBtn.addEventListener('click', () => {
        document.getElementById('rental').scrollIntoView({ behavior: 'smooth' });
        showRentalPage('rentalPage');
      });
    }
  });
  
  