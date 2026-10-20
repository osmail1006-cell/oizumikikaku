'use strict';
// Only publish contact details that the business owner has supplied for this site.
const CONTACT = { email: 'oizumi.kikaku@gmail.com', mobile: '090-5765-1797', googleFormUrl: 'https://forms.gle/NuiNAG29KdVWrDLi7' };
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
document.querySelectorAll('[data-contact]').forEach(button => button.addEventListener('click', () => { if (button.dataset.contact === 'form') { if (CONTACT.googleFormUrl) { window.open(CONTACT.googleFormUrl, '_blank', 'noopener,noreferrer'); } else { document.querySelector('#form-dialog').showModal(); } } else if (button.dataset.contact === 'email' && CONTACT.email) { window.location.href = 'mailto:' + CONTACT.email + '?subject=' + encodeURIComponent('空室清掃・原状回復の相談') + '&body=' + encodeURIComponent('お名前・会社名：\n物件所在地：\n間取り・面積：\n希望する作業内容：\n希望日：\nご連絡先：\n'); } else if (button.dataset.contact === 'phone' && CONTACT.mobile) { window.location.href = 'tel:' + CONTACT.mobile.replace(/[^+0-9]/g, ''); } else { document.querySelector('#contact-dialog').showModal(); } }));
document.querySelector('#year').textContent = new Date().getFullYear();

if (CONTACT.googleFormUrl) { document.querySelector('[data-form-display]').textContent = 'Googleフォームを開く'; }
