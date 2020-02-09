var animationTimeline = (() => {
    const t = new TimelineMax();
    t.to('.intro-cover-text', 1.5, { letterSpacing: '0px', ease: Expo.easeOut })
        .to('.intro-cover', 1, { height: '0', ease: Expo.easeOut })
        .to('.intro-logo-img', 1, { opacity: '0', ease: Expo.easeOut }, '-=1')
        .to('.intro-cover-text', 1, { opacity: '0', ease: Expo.easeOut }, '-=1')
        .to('.intro-cover-text', 1, { fontSize: '0em' }, '-=1');
    return t;
})();