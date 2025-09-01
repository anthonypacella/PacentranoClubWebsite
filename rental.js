function showRentalPage(pageId) {
    const pages = document.querySelectorAll('#rental .page');
    pages.forEach(page => page.style.display = 'none');
  
    const target = document.getElementById(pageId);
    if (target) {
      target.style.display = 'block';
    }
  }
  