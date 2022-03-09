// Toggle Dark Mode
var darkModeBtn = document.getElementById('dark-mode');
// var body = document.querySelector('body');

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})