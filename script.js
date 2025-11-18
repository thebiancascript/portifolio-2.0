// 1. encontra os elementos HTML que vamos usar
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// 2. adiciona um "escutador de eventos" de clique no hambúrguer
hamburger.addEventListener('click', () => {
  // quando clicar, ele adiciona ou remove a classe 'active' do menu
  navLinks.classList.toggle('active');
});

// --- BÔNUS: fechar o menu ao clicar em um link ---
// melhora a experiência do usuário no celular.
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', () => {
    // se o menu estiver aberto, remove a classe 'active' para fechá-lo
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});