// Progressive enhancement: content and language links also work without JavaScript.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const small = window.matchMedia('(max-width: 900px)');
function syncMenu() { toggle.hidden = !small.matches; nav.dataset.collapsed = String(small.matches); toggle.setAttribute('aria-expanded', String(!small.matches)); }
if (toggle && nav) {
  syncMenu(); small.addEventListener('change', syncMenu);
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.dataset.collapsed = String(!open); });
  nav.addEventListener('click', event => { if (event.target.closest('a') && small.matches) { nav.dataset.collapsed = 'true'; toggle.setAttribute('aria-expanded', 'false'); } });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && small.matches && toggle.getAttribute('aria-expanded') === 'true') { nav.dataset.collapsed = 'true'; toggle.setAttribute('aria-expanded', 'false'); toggle.focus(); } });
}
const language = document.querySelector('[data-language]');
function syncLanguage() { if (language) { const target = new URL(language.getAttribute('href'), location.href); target.hash = location.hash; language.href = target.href; } }
syncLanguage(); window.addEventListener('hashchange', syncLanguage);
