
(() => {
    let landing = document.querySelector('.landing');
    let registerbtn = document.querySelector('.register-btn');
    let tabsbtns = document.querySelector('.tabs');
    const opt = {
        threshold: .5
    }
    const opt2 = {
        threshold: .2,

    }
    let observer = new IntersectionObserver(navCheck, opt);
    let observer2 = new IntersectionObserver(navCheck2, opt2);
    function navCheck(enteries) {
        if (enteries[0].isIntersecting) {
            registerbtn.style.opacity = '0';
            registerbtn.style.setProperty('pointer-events', 'none');
        }
        if (!enteries[0].isIntersecting) {
            registerbtn.style.opacity = '1';
            registerbtn.style.setProperty('pointer-events', 'all');
        }


    }
    function navCheck2(enteries) {
        if (enteries[0].isIntersecting) {
            tabsbtns.style.opacity = '1';
            tabsbtns.style.setProperty('pointer-events', 'all');

        }
        if (!enteries[0].isIntersecting) {

            tabsbtns.style.opacity = '0';
            tabsbtns.style.setProperty('pointer-events', 'none');
        }
    }
    observer.observe(landing);
    observer2.observe(document.querySelector('.schedule'));

    function SmoothVerticalScrolling(e, time, where) {
        var eTop = e.getBoundingClientRect().top;
        var eAmt = eTop / 100;
        var curTime = 0;
        while (curTime <= time) {
            window.setTimeout(SVS_B, curTime, eAmt, where);
            curTime += time / 100;
        }
    }

    function SVS_B(eAmt, where) {
        if (where == "center" || where == "")
            window.scrollBy(0, eAmt / 2);
        if (where == "top")
            window.scrollBy(0, eAmt);
    }

    var sections = [
        document.querySelector('.about'),
        document.querySelector('.cia19'),
        document.querySelector('.schedule'),
        document.querySelector('.tracks'),
        document.querySelector('.faq'),
        document.querySelector('.landing'),
        document.querySelector('.conduct'),
    ]
    document.querySelector('.fade>span').addEventListener('click', () => {
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            SmoothVerticalScrolling(sections[0], 1000, 'top');
        } else sections[0].scrollIntoView();
    });

    let footerLinks = document.querySelectorAll('.links p');
    footerLinks.forEach((element, i) => {
        if (i != 7) {
            element.addEventListener('click', () => {
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    SmoothVerticalScrolling(sections[i], 1000, 'top');
                } else sections[i].scrollIntoView();
            })
        } else {
            element.firstChild.style.setProperty('pointer-events', 'all');
        }

    })
    let navLinks = document.querySelectorAll('.nav-links p');
    navLinks.forEach((element, i) => {
        if (i != 7) {
            element.addEventListener('click', () => {
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    SmoothVerticalScrolling(sections[i], 1000, 'top');
                } else {
                    if (i == 0) {
                        
                        document.querySelector('footer').scrollIntoView();
                    } else {
                        sections[i].scrollIntoView();
                    }

                }
            })
        } else {
            element.firstChild.style.setProperty('pointer-events', 'all');
        }

    })

    const tabs = document.querySelectorAll('.tabs>h2');
    switchTo(0);
    function switchTo(tabindex) {
        tabs[tabindex].setAttribute('class', 'selected-tab');
        tabs[Number(!tabindex)].setAttribute('class', '');

        const sections = document.querySelectorAll('.day-section');
        animationTimeline.fromTo(sections[Number(!tabindex)], .1, { opacity: '1' }, { opacity: '0', onComplete: () => { sections[tabindex].style.display = 'block'; sections[Number(!tabindex)].style.display = 'none'; } });
        animationTimeline.fromTo(sections[tabindex], .1, { opacity: '0' }, { opacity: '1', onComplete: () => { sections[Number(!tabindex)].style.display = 'none'; } });

        if (tabindex) document.querySelector('.schedule').scrollIntoView();
    }

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            switchTo(i);
        })
    });



})();


