// scripts.js
const languageToggle = document.getElementById('language-toggle');
const currentLanguage = localStorage.getItem('language');

// Verificar el idioma actual almacenado en localStorage
if (currentLanguage) {
  setLanguage(currentLanguage);
}

// Manejar el evento clic del botón de cambio de idioma
languageToggle.addEventListener('click', () => {
  const newLanguage = toggleLanguage();
  setLanguage(newLanguage);
});

// Función para cambiar el idioma actual y almacenarlo en localStorage
function toggleLanguage() {
  const currentLanguage = localStorage.getItem('language');
  const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
  localStorage.setItem('language', newLanguage);
  return newLanguage;
}

// Función para establecer el idioma en la página
function setLanguage(language) {
  // Implementa lógica para cambiar el contenido en los elementos HTML según el idioma seleccionado
  if (language === 'en') {
    languageToggle.textContent = 'Español';
    // Modifica otros elementos HTML para mostrar el contenido en inglés
  } else {
    languageToggle.textContent = 'English';
    // Modifica otros elementos HTML para mostrar el contenido en español
  }
}
