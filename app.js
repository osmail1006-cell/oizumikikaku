'use strict';
// Only publish contact details that the business owner has supplied for this site.
const CONTACT = { email: 'oizumi.kikaku@gmail.com', mobile: '090-5765-1797' };
const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
function closeMenu() { mobileMenu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'メニューを開く'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; mobileMenu.hidden = !open; menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く'); });
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.querySelectorAll('.comparison').forEach(comparison => { const range = comparison.querySelector('input[type=range]'); range.addEventListener('input', () => { const value = Number(range.value); comparison.style.setProperty('--position', value + '%'); range.setAttribute('aria-valuetext', `清掃前${value}%、清掃後${100 - value}%`); }); });
document.querySelectorAll('dialog').forEach(dialog => { dialog.querySelectorAll('.dialog-close,.dialog-dismiss').forEach(button => button.addEventListener('click', () => dialog.close())); dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } }); });
document.querySelector('#privacy-button').addEventListener('click', () => document.querySelector('#privacy-dialog').showModal());
if (CONTACT.email) document.querySelectorAll('[data-email-display]').forEach(element => { element.textContent = CONTACT.email; });
if (CONTACT.mobile) document.querySelectorAll('[data-phone-display]').forEach(element => { element.textContent = CONTACT.mobile; });
document.querySelector('#year').textContent = new Date().getFullYear();



// Resolve the form return URL on the current host (GitHub Pages or Cloudflare Pages).
const hostedInquiryForm = document.querySelector('#inquiry-form');
if (hostedInquiryForm) {
  const hostedBase = new URL('./', window.location.href);
  for (const [fieldName, fieldValue] of [
    ['_next', new URL('thanks.html', hostedBase).href],
    ['_url', new URL('#inquiry', hostedBase).href]
  ]) {
    let field = hostedInquiryForm.querySelector('input[name="' + fieldName + '"]');
    if (!field) {
      field = document.createElement('input');
      field.type = 'hidden';
      field.name = fieldName;
      hostedInquiryForm.appendChild(field);
    }
    field.value = fieldValue;
  }
}
