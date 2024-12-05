

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const toggleBtn = document.createElement('button');
  toggleBtn.innerText = '☰';
  toggleBtn.style.cssText = `
    display: none;
    padding: 10px;
    background-color: #004f9e;
    color: white;
    border: none;
    font-size: 16px;
    cursor: pointer;
  `;

  navbar.insertBefore(toggleBtn, navbar.firstChild);

  toggleBtn.addEventListener('click', () => {
    const menus = document.querySelectorAll('.main-menu, .sub-menu');
    menus.forEach(menu => {
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });
  });

  // Responsive check
  const checkScreenWidth = () => {
    if (window.innerWidth > 768) {
      document.querySelectorAll('.main-menu, .sub-menu').forEach(menu => {
        menu.style.display = 'flex';
      });
      toggleBtn.style.display = 'none';
    } else {
      document.querySelectorAll('.main-menu, .sub-menu').forEach(menu => {
        menu.style.display = 'none';
      });
      toggleBtn.style.display = 'block';
    }
  };

  window.addEventListener('resize', checkScreenWidth);
  checkScreenWidth(); // Run on page load
});

// Select all FAQ items
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.toggle-icon');

  question.addEventListener('click', () => {
    // Toggle answer visibility
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

    // Toggle icon between "+" and "×"
    icon.textContent = icon.textContent === '+' ? '×' : '+';
  });
});