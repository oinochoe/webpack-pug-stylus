'use strict';

function $(elem) {
    return document.querySelector(elem);
}
function hasClass(el, className) {
    return el.hasClass ? el.classList.contains(className) : new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
}
function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
}
function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split('').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}

function $extendObj(_def, addons) {
    if (typeof addons !== 'undefined') {
        for (var prop in _def) {
            if (addons[prop] != undefined) {
                _def[prop] = addons[prop];
            }
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {});
