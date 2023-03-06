const btnInput = document.querySelector('.btn-mode');
let body = document.querySelector('body');
let footer = document.querySelector('footer');
btnInput.addEventListener('click', function () {
  body.classList.toggle('dark');
  footer.classList.toggle('dark');
});
