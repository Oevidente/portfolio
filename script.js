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
