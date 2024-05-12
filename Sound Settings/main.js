const sliders = document.querySelectorAll('.wrapper.slider input[type="range"]');

const silentModeToggle = document.querySelector('.wrapper.silent-wrapper input');
const silentModeDurationSelect = document.querySelector('.wrapper.silent-duration-wrapper select');
const silentModeDurationWrapper = silentModeDurationSelect.parentElement;

const ringtoneSlider = document.querySelector('.wrapper.slider #ringtone-slider');
const ringtoneLabel = document.querySelector('.wrapper.slider label[for="ringtone-slider"]');
const ringtoneIcon = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgb(29, 10, 53)' viewBox='0 -960 960 960'%3E%3Cpath d='M197.37-191.87q-19.15 0-32.33-13.17-13.17-13.18-13.17-32.33t13.17-32.33q13.18-13.17 32.33-13.17H229v-271.87q0-86.11 51.32-153.6 51.31-67.49 134.18-88.2v-26.09q0-27.29 19.1-46.4 19.11-19.1 46.4-19.1t46.4 19.1q19.1 19.11 19.1 46.4v26.09q83.11 20.71 134.3 88.08Q731-641.09 731-554.74v271.87h31.63q19.15 0 32.33 13.17 13.17 13.18 13.17 32.33t-13.17 32.33q-13.18 13.17-32.33 13.17H197.37ZM480-498.8Zm.24 429.56q-34.18 0-58.53-24.27-24.34-24.27-24.34-58.36h165.5q0 34.2-24.27 58.41-24.28 24.22-58.36 24.22ZM320-282.87h320v-271.87q0-66-47-113t-113-47q-66 0-113 47t-47 113v271.87Z'/%3E%3C/svg%3E\")";
const mutedRingtoneIcon = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgb(29, 10, 53)' viewBox='0 -960 960 960'%3E%3Cpath d='M681.63-194.02H188.09q-14.68 0-24.37-9.7-9.7-9.69-9.7-24.37 0-14.67 9.7-24.37 9.69-9.69 24.37-9.69h43.78v-298.02q0-35.4 8.84-69.55 8.83-34.15 27.75-65.06l50.97 51.21q-9.71 19.48-14.57 40.7-4.86 21.22-4.86 42.7v298.02h313.02L92.17-784q-9.47-9.48-9.35-21.96.11-12.47 9.59-21.95 9.48-9.24 21.96-9.24t21.96 9.24l690.45 691.69q9.48 9.48 9.48 21.96t-9.48 21.96q-9.48 9.47-21.95 9.47-12.48 0-21.96-9.47L681.63-194.02ZM544.07-801.35q83.39 17.24 133.84 86.13 50.46 68.89 50.46 155.05v153.67q0 16.91-10.82 25.49-10.81 8.58-23.48 8.58-12.44 0-23.25-8.46Q660-389.35 660-406.5v-153.67q0-74.76-52.5-127.38Q555-740.17 480-740.17q-24.61 0-49.39 7.4t-46.54 22.16q-13.92 8.48-29.59 6.9-15.68-1.57-25.15-14.25-8.48-11.43-7.65-24.61.84-13.17 12.52-21.41 17.56-13.28 38.37-23.06 20.8-9.79 43.36-14.31v-20.56q0-26.92 18.7-45.61 18.7-18.7 45.37-18.7 26.67 0 45.37 18.7 18.7 18.69 18.7 45.61v20.56Zm-86.94 382.07Zm23.11 347.41q-31.48 0-55.58-18-24.09-18-24.09-47.48 0-7.48 5.09-12.07 5.1-4.6 12.82-4.6h123.28q7.72 0 12.82 4.6 5.09 4.59 5.09 12.07 0 29.48-24.09 47.48-24.1 18-55.34 18Zm30.15-470.56Z'/%3E%3C/svg%3E\")";

const dndToggle = document.querySelector('input#dnd-toggle[type="checkbox"]');

const vibrationSlider = document.querySelector('#vibration-slider');
const vibrationToggle = document.querySelector('#vibration-toggle');

const updateSlider = (e) => {
    if (e.target != document && e.target != window) {
        e.target.style.setProperty('--_value', `${e.target.value}%`);
        return;
    }

    sliders.forEach((el) => {
        el.style.setProperty('--_value', `${el.value}%`);
        setInterval(() => el.style.setProperty('transition', 'filter .1s linear, box-shadow .67s cubic-bezier(0.1, 0, 0, 0.5), --_value 2s cubic-bezier(0.05, 0.5, 0, 1)'), 100)
    });
}

const toggleSilentModeStuff = (_e) => {
    if (silentModeToggle.checked) {
        silentModeDurationSelect.disabled = false;
        ringtoneSlider.disabled = true;
        ringtoneLabel.style.setProperty(
            '--_icon',
            mutedRingtoneIcon
        );
    } else {
        silentModeDurationSelect.disabled = true;
        ringtoneSlider.disabled = false;
        dndToggle.checked = false;
        vibrationToggle.disabled = false;
        vibrationSlider.disabled = false;
        ringtoneLabel.style.setProperty(
            '--_icon',
            ringtoneIcon
        );
    }
}

window.onload = (e) => { updateSlider(e); toggleSilentModeStuff(e); };
document.onload = (e) => { updateSlider(e); toggleSilentModeStuff(e); };
window.onloadeddata = (e) => { updateSlider(e); toggleSilentModeStuff(e); };
document.onloadeddata = (e) => { updateSlider(e); toggleSilentModeStuff(e); };

sliders.forEach((el) => {
    el.addEventListener('change', updateSlider);
    el.addEventListener('input', updateSlider);
});

silentModeToggle.oninput = toggleSilentModeStuff;
dndToggle.oninput = () => {
    if (!dndToggle.checked) {
        vibrationToggle.disabled = false;
        vibrationSlider.disabled = false;
        silentModeDurationSelect.disabled = false;
        return;
    }

    silentModeToggle.checked = true;
    toggleSilentModeStuff();
    vibrationToggle.disabled = true;
    vibrationSlider.disabled = true;
    silentModeDurationSelect.disabled = true;
}
