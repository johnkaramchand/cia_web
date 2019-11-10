function intro() {
    const t = new TimelineMax();
    t.to('.intro-text h1', 1, { letterSpacing: '0px', ease: Expo.easeOut })
        .to('.cover-screen', 1, { height: '0', ease: Expo.easeOut })
        .to('.intro-text h1', 1, { opacity: '0', ease: Expo.easeOut }, '-=1')
        .to('.intro-text h1', 0, { fontSize: '0em' });
}
intro();