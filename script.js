const popup = document.getElementById('themePopup');
const body = document.body;

// Prüfen, ob der Nutzer schon gewählt hat
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }
  popup.style.display = 'none';
}

// Buttons
document.getElementById('lightModeBtn').addEventListener('click', () => {
  body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
  popup.style.display = 'none';
});

document.getElementById('darkModeBtn').addEventListener('click', () => {
  body.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark');
  popup.style.display = 'none';
});
