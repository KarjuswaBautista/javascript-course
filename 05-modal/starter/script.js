'use strict';

'use strict';

console.log('=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING ===');
console.log('Modal project ready!');

const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');
let lastFocusedButton = null;
console.log('Open buttons:', btnsOpenModalEl.length);

const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
  modalEl.focus();
  lastFocusedButton = document.activeElement;
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

console.log('=== MODAL DEVELOPMENT: KEYBOARD EVENTS & ADVANCED UX ===');
console.log('Enhanced modal development ready!');

console.log('Keyboard events test');

document.addEventListener('keydown', function (e) {
  console.log('Key pressed:', e);
  console.log('Key name:', e.key);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    console.log('ESC key pressed!');
    closeModal();
  }
});

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close modal');
