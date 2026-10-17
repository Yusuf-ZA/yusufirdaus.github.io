const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(opened));
  toggle.textContent = opened ? '✕' : '☰';
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
  document.querySelectorAll('.nav a').forEach(item => item.classList.remove('active'));
  link.classList.add('active');
}));
document.getElementById('year').textContent = new Date().getFullYear();
