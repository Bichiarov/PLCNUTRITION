const WHATSAPP_NUMBER = '5513988229261';
const WHATSAPP_MESSAGE = 'Olá! Vim pelo site da PLC Nutrition e gostaria de fazer um pedido.';

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  link.setAttribute('href', whatsappUrl);
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const actions = document.querySelector('.header-actions');
menuToggle?.addEventListener('click', () => {
  nav?.classList.toggle('open');
  actions?.classList.toggle('open');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', () => {
    nav?.classList.remove('open');
    actions?.classList.remove('open');
  });
});
