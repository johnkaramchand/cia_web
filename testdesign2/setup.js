var styles = [
    'main.css'
];
let styleSetup = (styles) => {
    styles.forEach(style => {
        const link = document.createElement('link');
        link.href = './css/' + style;
        link.rel = "stylesheet"
        document.head.appendChild(link);
    });
}
styleSetup(styles);