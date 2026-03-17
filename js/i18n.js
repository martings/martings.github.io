// i18n.js — lightweight bilingual switcher
// Reads [data-lang-es] / [data-lang-en] attributes and toggles content on click.
(function () {
  var STORAGE_KEY = 'lang';
  var DEFAULT_LANG = 'es';

  function getCurrentLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function applyLang(lang) {
    document.querySelectorAll('[data-lang-es], [data-lang-en]').forEach(function (el) {
      var text = el.getAttribute('data-lang-' + lang);
      if (text !== null) el.innerHTML = text;
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function init() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(this.getAttribute('data-lang'));
      });
    });
    applyLang(getCurrentLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
