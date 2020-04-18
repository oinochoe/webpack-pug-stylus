import css from './style2.styl';
window.addEventListener('DOMContentLoaded', () => {
    const INPUT = document.querySelector('input');
    const BLOCK = document.querySelector('.block');
    const H = document.querySelector('h1');

    const update = (e) => {
        BLOCK.style.setProperty('--distance', e.target.value);
        H.innerHTML = `offset-distance: ${e.target.value}%;`;
    };

    INPUT.addEventListener('input', update);
});
