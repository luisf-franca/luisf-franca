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
