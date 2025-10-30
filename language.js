/* =====================================
   GLOBAL LANGUAGE & DARK MODE SCRIPT
   ===================================== */

// Übersetzungen – beliebig erweiterbar
const translations = {
  de: {
    "nav.start": "Start",
    "nav.teams": "Mannschaften",
    "nav.dates": "Termine",
    "nav.signup": "Anmeldung",
    "nav.contact": "Kontakt",
    "main.welcome": "Willkommen beim SV Germania Herolz ⚽",
    "main.text": "Seit 1911 steht der SV Germania Herolz für Leidenschaft, Zusammenhalt und sportlichen Erfolg. Entdecke hier alles rund um unseren Verein – von Mannschaften über Termine bis hin zur Anmeldung.",
    "footer.copy": "© 2025 SV Germania Herolz – Alle Rechte vorbehalten",
    "form.name": "Name",
    "form.submit": "Absenden",
  },
  en: {
    "nav.start": "Home",
    "nav.teams": "Teams",
    "nav.dates": "Schedule",
    "nav.signup": "Sign Up",
    "nav.contact": "Contact",
    "main.welcome": "Welcome to SV Germania Herolz ⚽",
    "main.text": "Since 1911, SV Germania Herolz has stood for passion, teamwork and sporting success. Discover everything about our club – from teams and matches to registration.",
    "footer.copy": "© 2025 SV Germania Herolz – All rights reserved",
    "form.name": "Name",
    "form.submit": "Submit",
  }
};

/* ---------- Dark Mode ---------- */
const darkToggle = document.getElementById("darkModeToggle");
if (darkToggle) {
  if (localStorage.getItem("darkMode") === "true") document.body.classList.add("dark-mode");
  darkToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    darkToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("darkMode", isDark);
  });
}

/* ---------- Sprache ---------- */
const languageSelect = document.getElementById("languageSelect");
if (languageSelect) {
  const savedLang = localStorage.getItem("language") || "de";
  languageSelect.value = savedLang;
  setLanguage(savedLang);

  languageSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    localStorage.setItem("language", lang);
    setLanguage(lang);
  });
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
}
