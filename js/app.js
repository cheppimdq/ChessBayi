// SCROLL NAV
window.addEventListener('scroll', function() {
    var nav = document.getElementById('navTransparente');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});