let temp = document.body.getBoundingClientRect();
let x = (temp.y / temp.height) * -1;
var header = document.querySelector('header');
let context = document.querySelector('.title p');
const setReadingContext = (text) => {
    //const t = new TimelineLite();
    console.log(text);
    let cia = document.querySelector('.title h1');
    context = document.querySelector('.title p');
    if (text === 'default') {
        cia.style.fontSize = '4rem';
        cia.style.opacity = '1';
        context.style.fontSize = '0rem';
        context.style.opacity = '1';
        /* t.to(cia, .2, { fontSize: '4rem', opacity: '1' })
            .to(context, .2, { fontSize: '0rem', opacity: '0' }, '-=.5'); */
    } else if (text !== context.innerHTML) {
        context.style.opacity = '0';
        context.innerHTML = text;
        context.style.opacity = '1';
        context.style.fontSize = '1rem';
        /* t.to(context, .2, { opacity: '0'})
            .to(context, .2, { fontSize: '1rem', opacity: '1' }); */
    }
};
setReadingContext('default');
onscroll = () => {
    temp = document.body.getBoundingClientRect();
    x = (temp.y / temp.height) * -1;
    console.log(x);
    if (x < .5) {
        setReadingContext('default');
    } else if (x > .5 && x < 1.5) {
        setReadingContext('Resources');
    } else if (x > 1.5 && x < 2.5) {
        setReadingContext('For everyone, Always!');
    } else if (x > 2.5 && x < 3.5) {
        setReadingContext('Mentorship');
    } else if (x > 3.5 && x < 4) {
        setReadingContext('Collaboration');
    }
}
