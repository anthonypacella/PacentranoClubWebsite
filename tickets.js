function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      if (page.id === pageId) {
        page.style.display = 'block';
        requestAnimationFrame(() => {
          page.classList.add('active');
        });
      } else {
        page.classList.remove('active');
        setTimeout(() => {
          if (!page.classList.contains('active')) {
            page.style.display = 'none';
          }
        }, 220);
      }
    });
  
    document.querySelectorAll('.steps li').forEach(li => {
      li.classList.toggle('current', li.dataset.page === pageId);
    });
  }
  
  function selectTicket(ticketInput) {
    const amountOnly = ticketInput.match(/\$\d+(?:\.\d{2})?/)[0];
    localStorage.setItem('selectedTicket', amountOnly);
    localStorage.setItem('selectedticketInput', ticketInput);
    document.getElementById('selectedTicket').textContent = amountOnly;
    document.getElementById('ticketInput').value = ticketInput;
    showPage('formPage');
  }
  
  document.querySelectorAll('.btn, .ticket-btn').forEach(button => {
    button.addEventListener('click', function (e) {
      const circle = document.createElement('span');
      const diameter = Math.max(this.clientWidth, this.clientHeight);
      const radius = diameter / 2;
  
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - this.getBoundingClientRect().left - radius}px`;
      circle.style.top = `${e.clientY - this.getBoundingClientRect().top - radius}px`;
      circle.classList.add('ripple');
  
      const oldRipple = this.querySelector('.ripple');
      if (oldRipple) oldRipple.remove();
  
      this.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });
  
  window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
      showPage(hash.replace('#', ''));
    } else {
      showPage('ticketsPage');
    }
  
    const storedAmount = localStorage.getItem('selectedTicket');
    if (storedAmount) {
      document.getElementById('selectedTicket').textContent = storedAmount;
    }
  
    const storedticketInput = localStorage.getItem('selectedticketInput');
    if (storedticketInput) {
      document.getElementById('ticketInput').value = storedticketInput;
    }
  });

  document.getElementById('ticketForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    // Example: send data to server
    fetch('/purchase-ticket', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(result => {
        console.log('Ticket purchased:', result);
        showPage('successPage');
      })
      .catch(error => {
        console.error('Error purchasing ticket:', error);
        alert('There was a problem processing your ticket. Please try again.');
      });
  });
  
  function buyAnotherTicket() {
    localStorage.removeItem('selectedTicket');
    localStorage.removeItem('selectedticketInput');
    document.getElementById('ticketInput').value = '';
    document.getElementById('selectedTicket').textContent = '';
    showPage('ticketsPage');
  }
  
  function handleNoPaymentOption() {
    alert('Please select a payment option before proceeding.');
  }
  