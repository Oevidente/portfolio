const btnInput = document.querySelector('.btn-mode');
let body = document.querySelector('body');
let footer = document.querySelector('footer');
btnInput.addEventListener('click', function () {
  body.classList.toggle('dark');
  footer.classList.toggle('dark');
});
const menuLateral = document.querySelector('.menu-lateral');
let alca = document.querySelector('.alca');
let galeria = document.querySelector('.galeria');

const mediaQuery = window.matchMedia('(max-width: 915px)');

if (mediaQuery.matches) {
  menuLateral.addEventListener('mouseenter', function () {
    alca.style.transform = 'translateX(0vw)';
    alca.style.opacity = '0';
    galeria.style.transform = 'translateX(0vw)';
    let apDesign = document.querySelector('.ap-design');
    let semPantim = document.querySelector('.Sem-Pantim');
    let cordel = document.querySelector('.Cordel');
    let chrome = document.querySelector('.Chrome');
    apDesign.style.width = '200px';
    semPantim.style.width = '200px';
    cordel.style.width = '200px';
    chrome.style.width = '200px';
  });

  menuLateral.addEventListener('mouseleave', function () {
    alca.style.transform = 'translateX(-14vw)';
    alca.style.opacity = '100';
    galeria.style.width = '78vw';
    galeria.style.transform = 'translateX(-12vw)';
    let apDesign = document.querySelector('.ap-design');
    let semPantim = document.querySelector('.Sem-Pantim');
    let cordel = document.querySelector('.Cordel');
    let chrome = document.querySelector('.Chrome');
    apDesign.style.width = '68.291vw';
    semPantim.style.width = '68.291vw';
    cordel.style.width = '68.291vw';
    chrome.style.width = '68.291vw';
  });
}
/* -------------------------------------------------- */
/* itens do menu */
let menuHome = document.querySelector('.menu-home');
let menuProjetos = document.querySelector('.menu-projetos');
let menuGithub = document.querySelector('.menu-github');
let menuInstagram = document.querySelector('.menu-instagram');
let menuLinkedin = document.querySelector('.menu-linkedin');

/* spans com titulo */
let homeLabel = document.querySelector('.span-home');
let projetosLabel = document.querySelector('.span-projetos');
let githubLabel = document.querySelector('.span-github');
let instagramLabel = document.querySelector('.span-instagram');
let linkedinLabel = document.querySelector('.span-linkedin');
let article = document.querySelector('article');
/* 128.4375px */
menuHome.addEventListener('mouseenter', function () {
  homeLabel.style.opacity = '100';
  homeLabel.style.top = '128.4375px';
});
menuHome.addEventListener('mouseleave', function () {
  homeLabel.style.opacity = '0';
  homeLabel.style.top = '68.4375px';
});
menuProjetos.addEventListener('mouseenter', function () {
  projetosLabel.style.opacity = '100';
  projetosLabel.style.top = '128.4375px';
});
menuProjetos.addEventListener('mouseleave', function () {
  projetosLabel.style.opacity = '0';
  projetosLabel.style.top = '68.4375px';
});
menuGithub.addEventListener('mouseenter', function () {
  githubLabel.style.opacity = '100';
  githubLabel.style.top = '128.4375px';
});
menuGithub.addEventListener('mouseleave', function () {
  githubLabel.style.opacity = '0';
  githubLabel.style.top = '68.4375px';
});
menuInstagram.addEventListener('mouseenter', function () {
  instagramLabel.style.opacity = '100';
  instagramLabel.style.top = '128.4375px';
});
menuInstagram.addEventListener('mouseleave', function () {
  instagramLabel.style.opacity = '0';
  instagramLabel.style.top = '68.4375px';
});
menuLinkedin.addEventListener('mouseenter', function () {
  linkedinLabel.style.opacity = '100';
  linkedinLabel.style.top = '128.4375px';
});
menuLinkedin.addEventListener('mouseleave', function () {
  linkedinLabel.style.opacity = '0';
  linkedinLabel.style.top = '68.4375px';
});
