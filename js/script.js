// scripts.js
// Obtén una referencia al botón de cambio de idioma
const languageToggle = document.getElementById('language-toggle');

// Agrega un controlador de eventos al botón
languageToggle.addEventListener('click', function() {
  // Obtiene todos los elementos de texto que deseas cambiar
  const elementsToTranslate = document.querySelectorAll('.translate');

  // Itera sobre los elementos y cambia el texto según el idioma seleccionado
  elementsToTranslate.forEach(function(element) {
    if (element.dataset.language === 'spanish') {
      // Cambiar al español
      element.textContent = element.dataset.spanish;
    } else if (element.dataset.language === 'english') {
      // Cambiar al inglés
      element.textContent = element.dataset.english;
    }
  });

  // Cambia el idioma del botón
  if (languageToggle.dataset.language === 'spanish') {
    languageToggle.textContent = 'English';
    languageToggle.dataset.language = 'english';
  } else if (languageToggle.dataset.language === 'english') {
    languageToggle.textContent = 'Español';
    languageToggle.dataset.language = 'spanish';
  }
});
