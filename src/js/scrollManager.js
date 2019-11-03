let temp = document.body.getBoundingClientRect();
let x = (temp.y / temp.height) * -1;
const t = new TimelineMax();
const setReadingContext = (text) => {

    let cia = document.querySelector('.title h1');
    let context = document.querySelector('.title p');

    if (text === 'default') {
        t.to(cia, .5, { fontSize: '4rem' })
            .to(context, .5, { fontSize: '0rem', opacity: '0' }, '-=.5');
    } else {
        context.innerHTML = text;
        console.log(context.innerHTML);
        t.to(cia, .5, { fontSize: '0rem', opacity: '0' })
            .to(context, .5, { fontSize: '2rem' }, '-=.5');
    }
};
setReadingContext('default');
window.onscroll = () => {
    temp = document.body.getBoundingClientRect();
    x = (temp.y / temp.height) * -1;
    console.log(x);
    if (x < 1) {
        setReadingContext('default');
    } else if (x > 1 && x < 2) {
        setReadingContext('Resources');
    }
}
