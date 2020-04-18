import css from './style2.styl';
window.addEventListener('DOMContentLoaded', () => {
    const DISTANCE = document.querySelector('input.distance');
    const ROTATE = document.querySelector('input.rotate');
    const BLOCK = document.querySelector('.block');
    const HD = document.querySelector('h1.distance');
    const HR = document.querySelector('h1.rotate');

    const updateDistance = (e) => {
        BLOCK.style.setProperty('--distance', e.target.value);
        HD.innerHTML = `offset-distance: ${e.target.value}%;`;
    };

    const updateRotate = (e) => {
        BLOCK.style.setProperty('--rotate', e.target.value);
        HR.innerHTML = `offset-rotate: ${e.target.value}deg;`;
    };

    ROTATE.addEventListener('input', updateRotate);
    DISTANCE.addEventListener('input', updateDistance);
});
