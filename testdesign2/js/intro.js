const t = new TimelineMax();
function intro() {
    const t = new TimelineMax();
    t.fromTo('.cover-screen', 1, { x: '50%', y: '50%' }, { x: '0%', y: '0%' });
}
intro();