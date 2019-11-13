const navbtns=()=>{
    const homebtn = document.querySelector('.cia-tag');
    const aboutbtn = document.querySelector('.about-btn');
    const projectsbtn = document.querySelector('.projects-btn');
    const eventsbtn = document.querySelector('.events-btn');
    homebtn.addEventListener('click', () => document.querySelector('header').scrollIntoView(false));
    aboutbtn.addEventListener('click', () => document.querySelector('.two').scrollIntoView(true));
    eventsbtn.addEventListener('click', () => document.querySelector('.two').scrollIntoView(true));
}
navbtns();