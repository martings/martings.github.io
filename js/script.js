// Language toggle function
function changeLanguage() {
  var languageButtons = document.querySelectorAll('#language-toggle');
  languageButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var language = this.getAttribute('data-language');
      var elements = document.querySelectorAll('[data-lang]');

      elements.forEach(function(element) {
        element.innerHTML = element.getAttribute('data-lang-' + language);
      });
    });
  });
}

// Call the function to enable language change
changeLanguage();
