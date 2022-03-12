import { isAuthicated } from './auth.js';

const navElement = document.querySelector('nav');

export function nav() {
  if (isAuthicated()) {
    navElement
      .querySelectorAll('.guest')
      .forEach((x) => x.classList.add('hidden'));
    navElement
      .querySelectorAll('.user')
      .forEach((x) => x.classList.remove('hidden'));
  } else {
    navElement
      .querySelectorAll('.guest')
      .forEach((x) => x.classList.remove('hidden'));
    navElement
      .querySelectorAll('.user')
      .forEach((x) => x.classList.add('hidden'));
  }
}
