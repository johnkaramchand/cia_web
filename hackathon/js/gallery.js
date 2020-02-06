(() => {
    const images = document.querySelectorAll('.img');
    var currentImage = 0;
    let [leftArrow, rightArrow] = document.querySelectorAll('.arrow');
    const opt = {
        threshold: .6
    }
    let observer = new IntersectionObserver(imageTracker, opt);
    images.forEach(e => {
        observer.observe(e);
    })
    var inviewObj;
    function imageTracker(e) {
        inviewObj = e;
        e.forEach((img, i) => {
            if (img.isIntersecting) {
                images.forEach((image, ii) => {
                    if (img.target.className == image.className) {
                        currentImage = ii;
                    }
                })
            }
        })
    }

    leftArrow.addEventListener('click', () => {
        if (currentImage) {
            currentImage = currentImage - 1;
            images[currentImage].scrollIntoView({ block: 'nearest' });
        } else {
            currentImage = images.length - 1;
            images[currentImage].scrollIntoView({ block: 'nearest' });
        }
    })
    rightArrow.addEventListener('click', () => {
        if (currentImage !== (images.length - 1)) {
            currentImage = currentImage + 1;
            images[currentImage].scrollIntoView({ block: 'nearest' });
        } else {
            currentImage = 0;
            images[currentImage].scrollIntoView({ block: 'nearest' });
        }
    })

    setInterval(() => {
        if (inviewObj[0].isIntersecting){
            if (currentImage !== (images.length - 1)) {
                currentImage = currentImage + 1;
                images[currentImage].scrollIntoView({ block: 'nearest' });
            } else {
                currentImage = 0;
                images[currentImage].scrollIntoView({ block: 'nearest' });
            }
        }
    }, 5000)
})();