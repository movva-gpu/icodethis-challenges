const nextSubmitButton = document.getElementById('next-submit');
const previousCancelButton = document.getElementById('previous-cancel');
const main = document.querySelector('main');
const pageWrapper = document.querySelector('.page-wrapper');

let pageIndex = 0;

let pageHeights = ['50vh', '70vh'];

let mainConfetti = new Confetti({
    target: document.querySelector('.page-wrapper'),
    length: 100,
    duration: 1e4,
});

mainConfetti.stop();

const styleHandler = (goingBack = false) => {
    if (goingBack != 'none') {
        if (goingBack) {
            pageIndex--;
        } else if (!goingBack) {
            pageIndex++;
        }
    }

    if (pageIndex === 0) {
        previousCancelButton.classList.remove('previous');
    } else {
        previousCancelButton.classList.add('previous');
    }

    if (pageIndex !== pageHeights.length - 1) {
        nextSubmitButton.classList.remove('submit');
    } else {
        nextSubmitButton.classList.add('submit');
    }

    if (pageIndex === 1) {
        document.querySelector('.part-1').style.opacity = 0;
        document.querySelector('.part-2').style.opacity = 1;
    } else {
        document.querySelector('.part-1').style.opacity = 1;
        document.querySelector('.part-2').style.opacity = 0;
    }

    main.style.setProperty('--_height', pageHeights[pageIndex]);
    pageWrapper.style.setProperty('--_page-index', pageIndex);
};

nextSubmitButton.onclick = e => {
    e.preventDefault();
    if (pageIndex === pageHeights.length - 1) {
        pageIndex = 0;
        styleHandler('none');
        mainConfetti.start();
        document.querySelector('#cross-check').checked = true;
        document.querySelector('form').reset();
        return;
    }
    styleHandler();
};

previousCancelButton.onclick = () => {
    if (pageIndex === 0) {
        return;
    }
    styleHandler(true);
};

styleHandler('none');
