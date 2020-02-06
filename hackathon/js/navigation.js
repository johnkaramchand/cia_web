
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
            registerbtn.style.setProperty('pointer-events', 'none');
        }
        else {
            registerbtn.style.opacity = '1';
            registerbtn.style.setProperty('pointer-events', 'all');
        }
    }
    observer.observe(landing);

    let sections = [
        document.querySelector('.about'),
        document.querySelector('.cia19'),
        document.querySelector('.schedule'),
        document.querySelector('.tracks'),
        document.querySelector('.faq'),
        document.querySelector('.landing'),
    ]
    document.querySelector('.fade>span').addEventListener('click', () => {
        sections[0].scrollIntoView();
    });
    document.querySelectorAll('.links p').forEach((element, i) => {
        element.addEventListener('click', () => {
            sections[i].scrollIntoView();
        })
    })

    const tabs = document.querySelectorAll('.tabs>h2');
    switchTo(0);
    function switchTo(tabindex) {
        tabs[tabindex].setAttribute('class', 'selected-tab');
        tabs[Number(!tabindex)].setAttribute('class', '');

        const sections = document.querySelectorAll('.day-section');
        animationTimeline.fromTo(sections[Number(!tabindex)], .1, { opacity: '1' }, {
            opacity: '0', onComplete: () => {

                sections[tabindex].style.display = 'block';
                sections[Number(!tabindex)].style.display = 'none';
            }

        })
        animationTimeline.fromTo(sections[tabindex], .1, { opacity: '0' }, {
            opacity: '1', onComplete: () => {

                sections[Number(!tabindex)].style.display = 'none';

            }
        })


    }
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            switchTo(i);
        })
    });



})();