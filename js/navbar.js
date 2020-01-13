const snap = (tab, es) => {
    const t = new TimelineMax();

    if (tab == 'p') {
        t.fromTo('.events-section', .4, { x: '0', opacity: '1' }, { x: '200px', opacity: '0', ease: Expo.easeOut });
        t.fromTo('.events-section', .4, { x: '-200px', opacity: '0' }, { x: '0', opacity: '1', ease: Expo.easeOut }, '+=.5');
    } else if (tab == 'e') {
        t.fromTo('.events-section', .4, { x: '0', opacity: '1' }, { x: '-200px', opacity: '0', ease: Expo.easeOut });
        t.fromTo('.events-section', .4, { x: '200px', opacity: '0' }, { x: '0', opacity: '1', ease: Expo.easeOut }, '+=.5');
    }
};
const navbtns = () => {
    const homebtn = document.querySelector('.cia-tag');
    const aboutbtn = document.querySelector('.about-btn');
    const projectsbtn = document.querySelector('.projects-btn');
    const eventsbtn = document.querySelector('.events-btn');
    homebtn.addEventListener('click', () => document.querySelector('header').scrollIntoView(false));
    aboutbtn.addEventListener('click', () => document.querySelector('.two').scrollIntoView(true));
    eventsbtn.addEventListener('click', () => document.querySelector('.events-projects').scrollIntoView(true));

    const projectstxt = document.querySelector('#projects-text');
    const eventtxt = document.querySelector('#events-text');
    projectstxt.addEventListener('click', () => switchTab('projects', projectstxt, eventtxt));
    eventtxt.addEventListener('click', () => switchTab('events', projectstxt, eventtxt));
    switchTab('events', projectstxt, eventtxt);

}
function switchTab(tab, pn, en) {
    const prsection = document.querySelector('.projects-section');
    const evsection = document.querySelector('.events-section');
    console.log(...arguments);
    if (tab == 'projects') {
        pn.className = 'selected-text'; en.className = 'unselected-text';
        snap('p', evsection);
    }
    else if (tab == 'events') {
        en.className = 'selected-text'; pn.className = 'unselected-text';
        snap('e', evsection);
    }
}

navbtns();