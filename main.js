document.addEventListener('DOMContentLoaded', () => {
    const buyBtn = document.getElementById('buyTicketsBtn');
    const rentalBtn = document.getElementById('bookRentalBtn');
  
    // Buy Tickets → show ticket wizard
    if (buyBtn) {
      buyBtn.addEventListener('click', () => {
        console.log("✅ Buy Tickets clicked");
        const ticketsSection = document.getElementById('tickets');
        if (ticketsSection) {
          ticketsSection.scrollIntoView({ behavior: 'smooth' });
        }
        if (typeof showPage === 'function') {
          showPage('ticketsPage'); // open first step of wizard
        }
      });
    }
  
    // Book A Rental → scroll to rental section
    if (rentalBtn) {
      rentalBtn.addEventListener('click', () => {
        console.log("✅ Book Rental clicked");
        const rentalSection = document.getElementById('rentalSection');
        if (rentalSection) {
          rentalSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          alert("Rental section coming soon!");
        }
      });
    }
  });
  