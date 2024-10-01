window.addEventListener('scroll', () => {
    const services = document.querySelector('.services');
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > window.innerHeight * 0.5) {
        services.classList.add('visible');
    }
});
