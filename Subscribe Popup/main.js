const subscribeButton = document.querySelector('.subscribe-wrapper button');

subscribeButton.onclick = (e) => {
    e.preventDefault();
    subscribeButton.parentElement.classList.add('clicked');
    setTimeout(() => subscribeButton.parentElement.classList.add('done'), 2880);
}
