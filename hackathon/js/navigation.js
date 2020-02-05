
(() => {
    let landing = document.querySelector('.landing');
    let registerbtn = document.querySelector('.register-btn');
    const opt = {
        thershold: 1
    }

    let observer = new IntersectionObserver(navCheck, opt);
    function navCheck(enteries) {
        if (enteries[0].isIntersecting) {
            registerbtn.style.opacity = '0';
            registerbtn.style.setProperty('pointer-events','none');
        }
        else {
            registerbtn.style.opacity = '1';
            registerbtn.style.setProperty('pointer-events', 'all');
        }
    }
    observer.observe(landing);
})();