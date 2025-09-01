document.addEventListener('DOMContentLoaded', () => {
    const buyBtn = document.getElementById('buyTicketsBtn');
    const rentalBtn = document.getElementById('bookRentalBtn');
    const heroSection = document.getElementById('hero'); // your top section
    const ticketsSection = document.getElementById('tickets'); // wizard container
  
    if (buyBtn) {
      buyBtn.addEventListener('click', () => {
        // Hide hero
        if (heroSection) heroSection.style.display = 'none';
  
        // Show tickets section
        if (ticketsSection) {
          ticketsSection.style.display = 'block';
        }
  
        // Jump straight to the first wizard page
        if (typeof showPage === 'function') {
          showPage('ticketsPage');
        }
      });
    }
  
    if (rentalBtn) {
      rentalBtn.addEventListener('click', () => {
        window.location.href = "https://example.com/rentals"; // change to your rental URL
      });
    }
  });
  