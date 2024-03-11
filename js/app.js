const menuButton = document.querySelector('#menu-button');
const linksList = document.querySelector('.nav-links-container');

function toggle() {
    linksList.classList.toggle('hidden');
}

menuButton.addEventListener('click', toggle);