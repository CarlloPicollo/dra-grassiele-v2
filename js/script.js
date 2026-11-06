document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('active'));
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menu.classList.remove('active')));
  }
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => btn.parentElement.classList.toggle('active'));
  });
});
