document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > window.innerHeight) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.getElementById('darkModeButton');
    const body = document.body;

    darkModeButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        const isDarkMode = body.classList.contains('dark-mode');
        body.style.backgroundColor = isDarkMode ? '#0E0F11' : '#F6F6F6';
        body.style.color = isDarkMode

        const logoDark = document.querySelector('.logo_dark');
        const logoWhite = document.querySelector('.logo_white');
    
        if (isDarkMode) {
            logoDark.style.display = 'block';
            logoWhite.style.display = 'none';
        } else {
            logoDark.style.display = 'none';
            logoWhite.style.display = 'block';
        }
    });
});


let currentLanguage = 'pt';

function updateLanguage() {
    const elementsToTranslate = document.querySelectorAll('[data-en], [data-pt]');

    elementsToTranslate.forEach((element) => {
        const enText = element.getAttribute('data-en');
        const ptText = element.getAttribute('data-pt');

        element.textContent = currentLanguage === 'en' ? enText : ptText;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    updateLanguage();
});

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    updateLanguage();
}
