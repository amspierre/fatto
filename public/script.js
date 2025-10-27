// MENU MOBILE
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navbar = document.getElementById('navbar');

// Alterna o menu mobile
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ---------- CATÁLOGO INTERATIVO ----------
const tabs = document.querySelectorAll('.tab');
const linhas = document.querySelectorAll('.linha');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove estado ativo
        tabs.forEach(t => t.classList.remove('active'));
        linhas.forEach(l => l.classList.remove('active'));

        // Adiciona ativo no clicado
        tab.classList.add('active');
        document.getElementById(tab.dataset.target).classList.add('active');
    });
});

// ---------- ESCONDER NAV AO ROLAR ----------
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 100) {
        // rolando pra baixo
        navbar.style.top = "-80px";
    } else {
        // rolando pra cima
        navbar.style.top = "0";
    }
    lastScroll = currentScroll;
});
