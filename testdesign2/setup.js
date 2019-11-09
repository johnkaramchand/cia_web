var scripts = [
    'gsap/css.js',
    'gsap/tlm.js',
    'gsap/tm.js',
    'intro.js',
    'navbar.js',
    'query.js',
    'main.js'
];
var styles = [
    'main.css'
];
let scriptSetup = (scripts) => {
    scripts.forEach(script => {
        const scr = document.createElement('script');
        scr.src = './js/' + script;
        console.log(scr);
        document.body.appendChild(scr);
    });
}
let styleSetup = (styles) => {
    styles.forEach(style => {
        const link = document.createElement('link');
        link.href = './css/' + style;
        link.rel = "stylesheet"
        document.head.appendChild(link);
    });
}
styleSetup(styles);